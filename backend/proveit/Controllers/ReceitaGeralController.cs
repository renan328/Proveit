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
        public IActionResult Listar(int id)
        {
            var dao = new ReceitaGeralDAO();
            var receitas = dao.ListarReceitas(id);

            return Ok(receitas);
        }
    }
}
