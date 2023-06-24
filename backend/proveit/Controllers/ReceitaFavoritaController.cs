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
            try
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }


        [HttpGet]
        [Route("verificar/{idReceita}/{idUsuario}")]
        public IActionResult CadastrarReceitasFavoritas(int idReceita, int idUsuario)
        {
            try
            {
                var dao = new ReceitaFavoritaDAO();
                var favorito = dao.VerificaoFavorito(idReceita, idUsuario);

                return Ok(favorito);
            }

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpPost]
        public IActionResult CadastrarReceitasFavoritas(ReceitaFavoritaDTO receitaFavorita)
        {
            try
            {
                var dao = new ReceitaFavoritaDAO();
                dao.CasastrarReceitasFavoritas(receitaFavorita);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpDelete]
        [Route("{idReceita}/{idUsuario}")]
        public IActionResult RemoverFavoritos([FromRoute] int idReceita, int idUsuario)
        {
            try
            {
                var dao = new ReceitaFavoritaDAO();
                dao.RemoverFavoritos(idReceita, idUsuario);

                return Ok();
            }

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }
    }
}
