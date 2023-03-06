using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListarReceitas()
        {
            var dao = new ReceitaDAO();
            var receitas = dao.ListarRecetas();

            return Ok(receitas);
        }
    }
}
