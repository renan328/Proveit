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
            var dao = new AvaliacaoDAO();
            var avaliacoes = dao.ListarAvaliacaoUnica(idAvaliacao);

            return Ok(avaliacoes);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarAvaliacaoDeReceita([FromRoute] int id)
        {
            var dao = new AvaliacaoDAO();
            var avaliacoes = dao.ListarAvaliacaoDeReceita(id);

            return Ok(avaliacoes);
        }

        [HttpGet]
        [Route("usuario/{idUsuario}")]
        public IActionResult ListarAvaliacaoDoUsuario([FromRoute] int idUsuario)
        {
            var dao = new AvaliacaoDAO();
            var avaliacoes = dao.ListarAvaliacaosDoUsuario(idUsuario);

            return Ok(avaliacoes);
        }

        [HttpGet]
        public IActionResult ListarAvaliacao()
        {
            var dao = new AvaliacaoDAO();
            var avaliacoes = dao.ListarAvaliacoes();

            return Ok(avaliacoes);
        }

        [HttpPost]
        public IActionResult CadastrarAvaliacao([FromBody] CadAvaliacaoDTO avaliacao)
        {
            var dao = new AvaliacaoDAO();
            dao.CadastrarAvaliacao(avaliacao);

            return Ok();

        }

        [HttpPut]
        public IActionResult AlterarAvaliacao(CadAvaliacaoDTO avaliacao)
        {
            var dao = new AvaliacaoDAO();
            dao.AlterarAvaliacao(avaliacao);

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult RemoverAvaliacao([FromRoute] int id)
        {
            var dao = new AvaliacaoDAO();
            dao.DeletarAvaliacao(id);

            return Ok();
        }
    }
}
