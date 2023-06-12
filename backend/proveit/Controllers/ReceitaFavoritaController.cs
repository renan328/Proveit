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


        [HttpGet]
        [Route("verificar/{idReceita}")]
        public IActionResult CadastrarReceitasFavoritas(int idReceita)
        {
            var dao = new ReceitaFavoritaDAO();
            var favorito = dao.VerificaoFavorito(idReceita);

            return Ok(favorito);
        }

        [HttpPost]
        public IActionResult CadastrarReceitasFavoritas(ReceitaFavoritaDTO receitaFavorita)
        {
            var dao = new ReceitaFavoritaDAO();
            dao.CasastrarReceitasFavoritas(receitaFavorita);

            return Ok();
        }

        [HttpDelete]
        [Route("{idReceita}/{idUsuario}")]
        public IActionResult RemoverFavoritos([FromRoute] int idReceita, int idUsuario)
        {
            var dao = new ReceitaFavoritaDAO();
            dao.RemoverFavoritos(idReceita, idUsuario);

            return Ok();
        }
    }
}
