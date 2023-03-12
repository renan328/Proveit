using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredienteController : ControllerBase
    {
        [HttpGet]
        public IActionResult Listar()
        {
            var dao = new IngredientesDAO();
            var ingredientes = dao.Listar();

            return Ok(ingredientes);
        }
        [HttpPost]
        public IActionResult Cadastrar(IngredienteDTO ingrediente)
        {
            var dao = new IngredientesDAO();
            dao.Cadastrar(ingrediente);

            return Ok();
        }
    }
}
