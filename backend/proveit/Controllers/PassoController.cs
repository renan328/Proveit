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
        public IActionResult DeletarPassos(int id)
        {
            var dao = new PassoDAO();
            dao.DeletarPassos(id);

            return Ok();
        }
    }
}
