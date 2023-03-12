using MySql.Data.MySqlClient;
using proveit.DTO;

namespace proveit.DAO
{
    public class ReceitaGeralDAO
    {
        public List<ReceitaGeralDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT Receitas.Nome, TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento FROM Receitas INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id;" +
                        "SELECT PassoTexto, NumPasso FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id;" +
                        "SELECT Ingredientes.Nome, Quantidade, Medida FROM Ingredientes_Receita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id INNER JOIN Receitas on Receitas.idReceita = Ingredientes_Receita.Receita_id;";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var receitas = new List<ReceitaGeralDTO>();
            while (dataReader.Read())
            {
                var receita = new ReceitaGeralDTO();
                receita.NomeReceita = dataReader["Nome"].ToString();
                receita.TempoPreparo = int.Parse(dataReader["TempoPreparo"].ToString());
                receita.Porcoes = int.Parse(dataReader["Porcoes"].ToString());
                receita.ValCalorico = int.Parse(dataReader["ValCalorico"].ToString());
                receita.Descricao = dataReader["Descricao"].ToString();
                receita.NomeTag = dataReader["NomeTag"].ToString();
                receita.Aproveitamento = bool.Parse(dataReader["Aproveitamento"].ToString());
                // receita.NumPasso = int.Parse(dataReader["NumPasso"].ToString());
                // receita.NomeIngrediente = dataReader["NomeIngrediente"].ToString();
                // receita.Quantidade = int.Parse(dataReader["Quantidade"].ToString());
                // receita.Medida = dataReader["Medida"].ToString();

                receitas.Add(receita);
            }
            conexao.Close();
            return receitas;
        }
    }
}
