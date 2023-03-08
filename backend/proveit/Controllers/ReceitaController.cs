using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

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

        [HttpPost]
        public IActionResult CadastrarRecetas(ReceitaDTO receita)
        {
            var dao = new ReceitaDAO();
            dao.CadastrarRceita(receita);

            return Ok();

        }

        [HttpPut]
        public IActionResult AlterarReceita(ReceitaDTO receita)
        {
            var dao = new ReceitaDAO();
            dao.AlterarReceita(receita);

            return Ok();
        }
        [HttpDelete]
        public IActionResult RemoverReceita(int id)
        {
            var dao = new ReceitaDAO();
            dao.RemoverReceita(id);

            return Ok();
        }


    }
}
