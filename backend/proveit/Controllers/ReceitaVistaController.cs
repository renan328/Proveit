using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaVistaController : ControllerBase
    {
        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarReceitasVistas([FromRoute] int idUsuario)
        {
            var dao = new ReceitaVistaDAO();
            var receitas = dao.ListarReceitasVistas(idUsuario);

            return Ok(receitas);
        }

        [HttpPost]
        public IActionResult CadastrarReceitaVista([FromBody] ReceitaVistaDTO receita)
        {
            var dao = new ReceitaVistaDAO();
            dao.CadastrarReceitaVistas(receita);

            return Ok();

        }
    }
}
