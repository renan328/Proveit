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
        [Route("MelhoresAvaliadas")]
        public IActionResult ListarMelhoresAvaliadas()
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.ListarMelhoresAvaliadas();
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
        [Route("ListarMaisComentadas")]
        public IActionResult ListarMaisComentadas()
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.ListarMaisComentadas();
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
        [Route("ListarMaisFavoritadas")]
        public IActionResult ListarMaisFavoritadas()
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.ListarMaisFavoritadas();
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
        [Route("onde/{chave}")]
        public IActionResult ListarReceitasFiltroWhere([FromRoute] string chave)
        {
            string filtro = "";
            if (chave == "Aproveitamento")
            {
                filtro = "WHERE Aproveitamento = true";

            } else if (chave == "Porcoes")
            {
                filtro = "WHERE Porcoes > 5";
            } else
            {
                return BadRequest();
            }

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
        [Route("categoria/{valor}")]
        public IActionResult ListarReceitasCategoria([FromRoute] string valor)
        {
            string filtro = $"WHERE Categoria = '{valor}'";

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
        [Route("ordernar/{chave}")]
        public IActionResult ListarReceitasOrderBy([FromRoute] string chave)
        {
            string filtro = "";
            if (chave == "idReceita")
            {
                filtro = "ORDER BY idReceita DESC";

            } else if (chave == "ValCalorico")
            {
                filtro = "ORDER BY ValCalorico ASC";
            }
            else
            {
                return BadRequest();    
            }

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
        [Route("historico")]
        public IActionResult ListarHistorico(string idReceitas)
        {
            var filtro = $"WHERE idReceita IN ({idReceitas})";
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

        [HttpGet]
        [Route("PesquisaPorIngredientes")]
        public IActionResult PesquisarPorIngredientes([FromQuery] string[] ingredientes)
        {
            var ReceitaDAO = new ReceitaGeralDAO();
            var AvaliacaoDAO = new AvaliacaoDAO();
            var receitas = ReceitaDAO.PesquisarPorIngredientes(ingredientes);
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
