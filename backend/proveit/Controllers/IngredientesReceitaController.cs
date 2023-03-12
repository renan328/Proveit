using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientesReceitaController : ControllerBase
    {
        [HttpGet]
        public IActionResult Listar()
        {
            var dao = new Ingredientes_ReceitaDAO();
            var ingredientesReceita = dao.ListarIngredientesReceitas();
            return Ok(ingredientesReceita);
        }

        [HttpPost]
        public IActionResult Cadastrar(Ingredientes_ReceitaDTO ingredientes)
        {
            var dao = new Ingredientes_ReceitaDAO();
            dao.CadastrarIngredientesDeReceita(ingredientes);

            return Ok();
        }
    }
}
