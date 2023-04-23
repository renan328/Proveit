using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaController : ControllerBase
    {

        public class DetalhesReceita
        {
            public List<ReceitaGeralDTO> Receitas { get; set; }
            public List<AvaliacaoDTO> Avaliacoes { get; set; }
            public double MediaEstrelas { get; set; }
        }


        [HttpGet]
        [Route("unica")]
        public IActionResult ListarReceitaUnica(int id)
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receita = ReceitaDAO.ListarReceitaUnica(id);
            var avaliacoes = AvaliacaoDAO.ListarAvaliacaoDeReceita(id);
            var mediaEstrelas = AvaliacaoDAO.CalcularMediaEstrelas(id);

            var detalhesReceita = new DetalhesReceita
            {
                Receitas = receita,
                Avaliacoes = avaliacoes,
                MediaEstrelas = mediaEstrelas
            };

            return Ok(detalhesReceita);
        }

        [HttpGet]
        public IActionResult ListarReceitas()
        {
            var dao = new ReceitaGeralDAO();
            var receitas = dao.ListarReceitas();

            return Ok(receitas);
        }

        [HttpPost]
        public IActionResult CadastrarRecetas([FromBody] ReceitaGeralDTO receita)
        {
            var receitaDAO = new ReceitaGeralDAO();
            receitaDAO.CadastrarReceita(receita);
            return Ok();

        }

        [HttpPut]
        public IActionResult AlterarReceita([FromBody] ReceitaGeralDTO receita)
        {
            var dao = new ReceitaGeralDAO();
            dao.AlterarReceita(receita);

            return Ok();
        }

        [HttpDelete]
        public IActionResult RemoverReceita([FromRoute] int id)
        {
            var dao = new ReceitaGeralDAO();
            dao.RemoverReceita(id);

            return Ok();
        }
    }
}
