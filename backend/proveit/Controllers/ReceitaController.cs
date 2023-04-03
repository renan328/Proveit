﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proveit.DAO;
using proveit.DTO;

namespace proveit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaController : ControllerBase
    {
        [HttpGet]
        [Route("unica")]
        public IActionResult ListarReceitaUnica(int id)
        {
            var dao = new ReceitaGeralDAO();
            var receitas = dao.ListarReceitaUnica(id);

            return Ok(receitas);
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
        public IActionResult AlterarReceita(ReceitaDTO receita)
        {
            var dao = new ReceitaDAO();
            dao.AlterarReceita(receita);

            return Ok();
        }
        [HttpDelete]
        public IActionResult RemoverReceita(int id)
        {
            var dao = new ReceitaDAO();
            dao.RemoverReceita(id);

            return Ok();
        }
    }
}
