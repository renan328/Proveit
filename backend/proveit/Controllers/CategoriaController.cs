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
    public class CategoriaController : ControllerBase
    {
        [HttpGet]
        [Route("todas")]
        public IActionResult ListarTodasCategorias()
        {
            var dao = new CategoriaDAO();
            var categorias = dao.ListarTodasCategorias();

            return Ok(categorias);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult ListarCategoriaUnica([FromRoute] int id)
        {
            var dao = new CategoriaDAO();
            var categorias = dao.ListarCategoriasUnica(id);

            return Ok(categorias);
        }

        [HttpPost]
        public IActionResult CadastarCategoria([FromBody] CategoriaDTO categoria)
        {
            var dao = new CategoriaDAO();
            dao.CadastrarCategoria(categoria);

            return Ok();
        }

        [HttpPut]
        public IActionResult AlterarCategoria([FromBody] CategoriaDTO categoria)
        {
            var dao = new CategoriaDAO();
            dao.AlterarCategoria(categoria);

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Removercat([FromRoute] int id)
        {
            var dao = new CategoriaDAO();
            dao.DeletarCat(id);

            return Ok();
        }
    }
}
