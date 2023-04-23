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
        [HttpPut]
        public IActionResult AlterarIngredientes(Ingredientes_ReceitaDTO ingredientes)
        {
            var dao = new Ingredientes_ReceitaDAO();
            dao.AlterarIngredientes_Receita(ingredientes);

            return Ok();
        }
        [HttpDelete]
        public IActionResult DeletarIngredientes(int id)
        {
            var dao = new Ingredientes_ReceitaDAO();
            dao.DeletarIngredientes_Receita(id);

            return Ok();
        }
    }
}
