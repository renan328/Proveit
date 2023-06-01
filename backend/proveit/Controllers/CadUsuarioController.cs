using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadUsuarioController : ControllerBase
    {
        [HttpPost]
        public IActionResult CadastrarUsuario(UsuarioDTO usuario)
        {
            var dao = new UsuarioDAO();
            dao.CadastrarUsuario(usuario);

            return Ok();
        }
    }
}
