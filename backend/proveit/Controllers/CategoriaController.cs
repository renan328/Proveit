using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public IActionResult ListarCategoriaUnica(int id)
        {
            var dao = new CategoriaDAO();
            var categorias = dao.ListarCategoriasUnica(id);

            return Ok(categorias);
        }
    }
}
