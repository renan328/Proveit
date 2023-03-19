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
        [Route("unica")]
        public IActionResult ListarReceitaUnica(int id)
        {
            var dao = new ReceitaGeralDAO();
            var receitas = dao.ListarReceitaUnica(id);

            return Ok(receitas);
        }

        [HttpGet]
        public IActionResult ListarReceitas()
        {
            var dao = new ReceitaGeralDAO();
            var receitas = dao.ListarReceitas();

            return Ok(receitas);
        }
    }
}
