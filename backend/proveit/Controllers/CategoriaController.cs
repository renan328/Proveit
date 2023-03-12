using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        [HttpGet ("{categoria_id}")]
        public IActionResult ListarCategorias()
        {
            var dao = new CategoriaDAO();
            var categorias = dao.ListarCategorias();

            return Ok(categorias);
        }
    }
}
