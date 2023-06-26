using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsuarioController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListarUsuarios()
        {
            try
            {
                var dao = new UsuarioDAO();
                var usuarios = dao.ListarUsuarios();

                return Ok(usuarios);
            }

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarPorID([FromRoute] int id)
        {

            try
            {
                var dao = new UsuarioDAO();
                var usuario = dao.ListarUsuarioPorId(id);

                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpPut]
        public IActionResult AlterarUsuario(UsuarioDTO usuario)
        {
            try
            {
                var dao = new UsuarioDAO();

                if (dao.VerificarEmailExistenteAoAlterar(usuario.idUsuario, usuario.Email))
                {
                    return Conflict("Este e-mail já está vinculado a uma conta.");
                }

                if (dao.VerificarNomeTagExistenteAoAlterar(usuario.idUsuario, usuario.NomeTag))
                {
                    return Conflict("Este nome de usuário já está em uso.");
                }

                dao.AlterarUsuario(usuario);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

    }
}