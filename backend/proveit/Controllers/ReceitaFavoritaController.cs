using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReceitaFavoritaController : ControllerBase
    {
        [HttpGet]
        [Route("usuario/{idUsuario}")]
        public IActionResult ListarReceitasDoUsuario([FromRoute] int idUsuario)
        {
            var ReceitaFavoritaDAO = new ReceitaFavoritaDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaFavoritaDAO.ListarReceitasFavoritas(idUsuario);
            var detalhesReceitas = new List<DetalhesReceitaDTO>();

            foreach (var receita in receitas)
            {
                var mediaEstrelas = AvaliacaoDAO.CalcularMediaEstrelas(receita.idReceita);
                var detalhesReceita = new DetalhesReceitaDTO
                {
                    Receita = receita,
                    MediaEstrelas = mediaEstrelas
                };
                detalhesReceitas.Add(detalhesReceita);
            }

            return Ok(detalhesReceitas);
        }

        [HttpPost]
        public IActionResult CadastrarReceitasFavoritas(ReceitaFavoritaDTO receitaFavorita)
        {
            var dao = new ReceitaFavoritaDAO();
            dao.CasastrarReceitasFavoritas(receitaFavorita);

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult RemoverFavoritos([FromRoute] int id)
        {
            var dao = new ReceitaFavoritaDAO();
            dao.RemoverFavoritos(id);

            return Ok();
        }
    }
}
