using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassoController : ControllerBase
    {
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeletarPassos([FromRoute] int id)
        {
            var dao = new PassoDAO();
            dao.DeletarPassos(id);

            return Ok();
        }
    }
}
