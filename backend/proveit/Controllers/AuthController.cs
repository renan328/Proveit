using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using proveit.DAO;
using proveit.DTO;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromForm] UsuarioDTO usuario)
        {
            try
            {
                var dao = new UsuarioDAO();
                var usuarioLogado = dao.Login(usuario);

                if (usuarioLogado.idUsuario == 0)
                {
                    return NotFound("Email e/ou senha inválidos");
                }

                var token = GenerateJwtToken(usuarioLogado, "k4y9iEQwVXVRmCpny1LpbhjxOPdjIifvpnTEf41AWcuFbxUNrw2iINhCG3pa2bV");
                return Ok(new { token });

                string GenerateJwtToken(UsuarioDTO usuario, string secretKey)
                {
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
                    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var claims = new List<Claim>
                {
                    new Claim("ID", usuario.idUsuario.ToString()),
                    new Claim("Email", usuario.Email),
                    new Claim("Nome", usuario.Nome),
                };

                    var token = new JwtSecurityToken(
                        "Proveit",
                        "Proveit",
                        claims,
                        expires: DateTime.UtcNow.AddYears(1),
                        signingCredentials: credentials
                        );

                    return new JwtSecurityTokenHandler().WriteToken(token);

                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpPost]
        [Route("Cadastro")]
        public IActionResult CadastrarUsuario(UsuarioDTO usuario)
        {
            try
            {
                var dao = new UsuarioDAO();

                if (dao.VerificarEmailExistente(usuario.Email))
                {
                    return Conflict("Este e-mail já está vinculado a uma conta.");
                }

                if (dao.VerificarNomeTagExistente(usuario.NomeTag))
                {
                    return Conflict("Este nome de usuário já está em uso.");
                }

                dao.CadastrarUsuario(usuario);

                return Ok("Usuário cadastrado com sucesso.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }


    }
}
