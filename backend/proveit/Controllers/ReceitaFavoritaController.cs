using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaFavoritaController : ControllerBase
    {
        [HttpGet]
        [Route("{idUsuario}")]
         public IActionResult ListarReceitasFavoritas([FromRoute] int idUsuario)
         {
            var receitas = new List<ReceitaGeralDTO>();
            var ReceitaDAO = new ReceitaGeralDAO();
            var receitasFavoritasDAO = new ReceitaFavoritaDAO();
            var receitasFavoritas = receitasFavoritasDAO.ListarFavoritos(idUsuario);

            foreach (var receitaId in receitasFavoritas)
            {
                var receita = ReceitaDAO.ListarReceitaUnica(receitaId);
                receitas.Add(receita);
            }

            return Ok(receitas);
         }

        [HttpPost]
        public IActionResult CadastrarReceitasFavoritas(ReceitaFavoritaDTO receitaFavorita)
        {
            var dao = new ReceitaFavoritaDAO();
            dao.CasastrarReceitasFavoritas(receitaFavorita);

            return Ok();
        }

        [HttpDelete]
        public IActionResult RemoverFavoritos([FromRoute] int id)
        {
            var dao = new ReceitaFavoritaDAO();
            dao.RemoverFavoritos(id);

            return Ok();
        }
    }
}
