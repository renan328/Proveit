using proveit.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proveit.DAO
{
    public class RceitaGeralDAO
    {
        public List<ReceitaGeralDTO> ListarReceitas()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();


            var query = "SELECT idReceita, Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento FROM Receitas INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id;" +
                        "SELECT idPasso, PassoTexto, NumPasso, Receita_id FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id WHERE Receita_id = @id;" + ;

            //             var query = "SELECT idPasso, PassoTexto, NumPasso, Receita_id FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id WHERE Receita_id = @id;";
            //             var query = "SELECT idIngredientesReceita, Ingredientes.Nome, Quantidade, Medida, Receita_id, Ingredientes_id FROM Ingredientes_Receita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id INNER JOIN Receitas on Receitas.idReceita = Ingredientes_Receita.Receita_id WHERE Receita_id = @id;";


            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();
        }
    }
}
