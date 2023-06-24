using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvaliacaoController : ControllerBase
    {


        [HttpGet]
        [Route("unica/{idAvaliacao}")]
        public IActionResult ListarAvaliacaoUnica([FromRoute]int idAvaliacao)
        {
            try
            {
                var dao = new AvaliacaoDAO();
                var avaliacao = dao.ListarAvaliacaoUnica(idAvaliacao);

                if (avaliacao == null)
                {
                    return NotFound();
                }

                return Ok(avaliacao);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarAvaliacaoDeReceita([FromRoute] int id)
        {
            try
            {
                var dao = new AvaliacaoDAO();
                var avaliacoes = dao.ListarAvaliacaoDeReceita(id);

                return Ok(avaliacoes);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        [Route("usuario/{idUsuario}")]
        public IActionResult ListarAvaliacaoDoUsuario([FromRoute] int idUsuario)
        {
            try
            {
                var dao = new AvaliacaoDAO();
                var avaliacoes = dao.ListarAvaliacaosDoUsuario(idUsuario);

                return Ok(avaliacoes);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        public IActionResult ListarAvaliacao()
        {
            try
            {
                var dao = new AvaliacaoDAO();
                var avaliacoes = dao.ListarAvaliacoes();

                return Ok(avaliacoes);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpPost]
        public IActionResult CadastrarAvaliacao([FromBody] CadAvaliacaoDTO avaliacao)
        {
            try
            {
                var dao = new AvaliacaoDAO();
                dao.CadastrarAvaliacao(avaliacao);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpPut]
        public IActionResult AlterarAvaliacao(CadAvaliacaoDTO avaliacao)
        {
            try
            {
                var dao = new AvaliacaoDAO();
                dao.AlterarAvaliacao(avaliacao);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult RemoverAvaliacao([FromRoute] int id)
        {
            try
            {
                var dao = new AvaliacaoDAO();
                dao.DeletarAvaliacao(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }
    }
}
