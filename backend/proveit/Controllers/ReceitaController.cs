using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;
using System.Text;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReceitaController : ControllerBase
    {
        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarReceitaUnica([FromRoute] int id)
        {
            try
            {
                var ReceitaDAO = new ReceitaGeralDAO();
                var AvaliacaoDAO = new AvaliacaoDAO();
                var receita = ReceitaDAO.ListarReceitaUnica(id);
                var avaliacoes = AvaliacaoDAO.ListarAvaliacaoDeReceita(id);
                var mediaEstrelas = AvaliacaoDAO.CalcularMediaEstrelas(id);

                var detalhesReceita = new DetalhesReceitaDTO
                {
                    Receita = receita,
                    Avaliacoes = avaliacoes,
                    MediaEstrelas = mediaEstrelas
                };

                return Ok(detalhesReceita);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");

            }
        }

        [HttpGet]
        [Route("proveit/{id}")]
        public IActionResult ListarReceitaProveit([FromRoute] int id)
        {
            try
            {
                var ReceitaDAO = new ReceitaGeralDAO();
                var AvaliacaoDAO = new AvaliacaoDAO();
                var receita = ReceitaDAO.ListarReceitaDoProveit(id);
                var avaliacoes = AvaliacaoDAO.ListarAvaliacaoDeReceita(id);
                var mediaEstrelas = AvaliacaoDAO.CalcularMediaEstrelas(id);

                var detalhesReceita = new DetalhesReceitaDTO
                {
                    Receita = receita,
                    Avaliacoes = avaliacoes,
                    MediaEstrelas = mediaEstrelas
                };

                return Ok(detalhesReceita);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");

            }
        }

        [HttpGet]
        [Route("usuario/{idUsuario}")]
        public IActionResult ListarReceitasDoUsuario([FromRoute] int idUsuario)
        {
            try
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpGet]
        [Route("MelhoresAvaliadas")]
        public IActionResult ListarMelhoresAvaliadas()
        {
            try
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

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        [Route("ListarMaisComentadas")]
        public IActionResult ListarMaisComentadas()
        {
            try
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

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }


        [HttpGet]
        [Route("ListarMaisFavoritadas")]
        public IActionResult ListarMaisFavoritadas()
        {
            try
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }


        [HttpGet]
        [Route("onde/{chave}")]
        public IActionResult ListarReceitasFiltroWhere([FromRoute] string chave)
        {
            try
            {
                string filtro = "";
                if (chave == "Aproveitamento")
                {
                    filtro = "WHERE Aproveitamento = true";

                }
                else if (chave == "Porcoes")
                {
                    filtro = "WHERE Porcoes > 5";
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

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        [Route("categoria/{valor}")]
        public IActionResult ListarReceitasCategoria([FromRoute] string valor)
        {
            try
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

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpGet]
        [Route("ordernar/{chave}")]
        public IActionResult ListarReceitasOrderBy([FromRoute] string chave)
        {
            try
            {
                string filtro = "";
                if (chave == "idReceita")
                {
                    filtro = "ORDER BY idReceita DESC";

                }
                else if (chave == "ValCalorico")
                {
                    filtro = "ORDER BY ValCalorico DESC";
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        [Route("historico")]
        public IActionResult ListarHistorico(string idReceitas)
        {
            try
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        [Route("pesquisa/{palavra}")]
        public IActionResult Pesquisar([FromRoute] string palavra)
        {
            try
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }
        }

        [HttpGet]
        [Route("PesquisaPorIngredientes")]
        public IActionResult PesquisarPorIngredientes([FromQuery] string[] ingredientes)
        {
            try
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
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpPost]
        public IActionResult CadastrarRecetas([FromBody] ReceitaGeralDTO receita)
        {
            try
            {
                var receitaDAO = new ReceitaGeralDAO();
                receitaDAO.CadastrarReceita(receita);
                
                return Ok();
            }

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpPut]
        public IActionResult AlterarReceita([FromBody] ReceitaGeralDTO receita)
        {
            try
            {
                var dao = new ReceitaGeralDAO();
                dao.AlterarReceita(receita);

                return Ok();
            }

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult RemoverReceita([FromRoute] int id)
        {
            try
            {
                var dao = new ReceitaGeralDAO();
                dao.RemoverReceita(id);

                return Ok();
            }

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro interno. Entre em contato com o suporte: admproveit@gmail.com");
            }

        }
    }
}
