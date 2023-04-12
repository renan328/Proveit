using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FotoController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListarFoto(int id)
        {
            var dao = new FotoReceitaDAO();
            var fotos = dao.ListarFotos(id);

            return Ok(fotos);
        }
        [HttpPost]
        public IActionResult CadastrarFoto(FotoReceitaDTO foto)
        {
            var dao = new FotoReceitaDAO();
            dao.CadastrarFoto(foto);

            return Ok();
        }

        [HttpDelete]
        public IActionResult RemoverFoto(int id)
        {
            var dao = new FotoReceitaDAO();
            dao.RemoverFoto(id);

            return Ok();
        }
    }
}
