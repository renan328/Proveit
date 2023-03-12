using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassoController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListarPassos()
        {
            var dao = new PassoDAO();
            var passos = dao.ListarPassos();
            return Ok(passos);
        }
        [HttpPost]
        public IActionResult CadastrarPassos([FromBody] PassoDTO passo)
        {
            var dao = new PassoDAO();
            dao.CadastrarPassos(passo);

            return Ok();
        }
    }
}
