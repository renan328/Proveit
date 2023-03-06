using MySql.Data.MySqlClient;
using proveit.DTO;

namespace proveit.DAO
{
    public class ReceitaDAO
    {
        public List<ReceitaDTO> ListarRecetas()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Receitas;";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();
            var receitas = new List<ReceitaDTO>();

            while (dataReader.Read())
            {
                var receita = new ReceitaDTO();

                receita.idRceita = int.Parse(dataReader["idReceita"].ToString());
                receita.Nome = dataReader["Nome"].ToString();
                receita.TempoPreparo = int.Parse(dataReader["TempoPreparo"].ToString());
                receita.Porcoes = int.Parse(dataReader["Porcoes"].ToString());
                receita.ValCalorico = dataReader["ValCalorico"].ToString();
                receita.Passo = dataReader["Passo"].ToString();
                receita.Descricao = dataReader["Descricao"].ToString();
                receita.Usuario_id = int.Parse(dataReader["Usuario_id"].ToString());
                receita.Ingrediente_id = int.Parse(dataReader["Ingrediente_id"].ToString());
                receita.Categoria_id = int.Parse(dataReader["Categoria_id"].ToString());
                receita.Aproveitamento = bool.Parse(dataReader["Categoria_id"].ToString());

                receitas.Add(receita);
            }

            conexao.Close();
            return receitas;
        }
    }
}
