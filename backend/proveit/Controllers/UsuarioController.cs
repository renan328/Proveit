using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListarUsuarios()
        {
            var dao = new UsuarioDAO();
            var usuarios = dao.ListarUsuarios();

            return Ok(usuarios);
        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarPorID([FromRoute] int id)
        {
            var dao = new UsuarioDAO();
            var usuario = dao.ListarUsuarioPorId(id);

            return Ok(usuario);
        }

        [HttpPost]
        public IActionResult CadastrarUsuario(UsuarioDTO usuario)
        {
            var dao = new UsuarioDAO();
            dao.CadastrarUsuario(usuario);

            return Ok();
        }

        [HttpPut]
        public IActionResult AlterarUsuario(UsuarioDTO usuario)
        {
            var dao = new UsuarioDAO();
            dao.AlterarUsuario(usuario);

            return Ok();

        }
    }
}
