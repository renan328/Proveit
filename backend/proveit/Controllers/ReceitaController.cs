using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;
using System.Text;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [Authorize]
    public class ReceitaController : ControllerBase
    {
        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarReceitaUnica([FromRoute] int id)
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receita = ReceitaDAO.ListarReceitaUnica(id);
            var avaliacoes = AvaliacaoDAO.ListarAvaliacaoDeReceita(id);
            var mediaEstrelas = AvaliacaoDAO.CalcularMediaEstrelas(id);

            var detalhesReceita = new DetalhesReceitaDTO
            {
                Receita= receita,
                Avaliacoes = avaliacoes,
                MediaEstrelas = mediaEstrelas
            };

            return Ok(detalhesReceita);
        }

        [HttpGet]
        public IActionResult ListarReceitas()
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.ListarReceitas();
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
        [Route("home")]
        public IActionResult ListarReceitasHome()
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.ListarReceitasHome();
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
        [Route("usuario/{idUsuario}")]
        public IActionResult ListarReceitasDoUsuario([FromRoute] int idUsuario)
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.ListarReceitasDoUsuario(idUsuario);
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
        [Route("filtro/{filtro}")]
        public IActionResult ListarReceitasComFiltro([FromRoute] string filtro)
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.ListarReceitasComFiltro(filtro);
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
        [Route("pesquisa/{palavra}")]
        public IActionResult Pesquisar([FromRoute] string palavra)
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.Pesquisar(palavra);
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
        [Route("{id}")]
        public IActionResult RemoverReceita([FromRoute] int id)
        {
            var dao = new ReceitaGeralDAO();
            dao.RemoverReceita(id);

            return Ok();
        }
    }
}
