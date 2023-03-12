using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaGeralController : ControllerBase
    {
        [HttpGet]
        public IActionResult Listar()
        {
            var dao = new ReceitaGeralDAO();
            var receitas = dao.Listar();

            return Ok(receitas);
        }
    }
}
