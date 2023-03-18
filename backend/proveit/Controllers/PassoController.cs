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
        public IActionResult ListarPassos(int id)
        {
            var dao = new PassoDAO();
            var passos = dao.ListarPassos(id);
            return Ok(passos);
        }
        [HttpPost]
        public IActionResult CadastrarPassos(PassoDTO passo)
        {
            var dao = new PassoDAO();
            dao.CadastrarPassos(passo);

            return Ok();
        }
        [HttpPut]
        public IActionResult AlterarPasso(PassoDTO passo)
        {
            var dao = new PassoDAO();
            dao.AlterarPassos(passo);

            return Ok();
        }
        [HttpDelete]
        public IActionResult DeletarPassos(int id)
        {
            var dao = new PassoDAO();
            dao.DeletarPassos(id);

            return Ok();
        }
    }
}
