using MySql.Data.MySqlClient;
using proveit.DAO;

namespace proveit.DTO
{
    public class ReceitaFavoritaDAO
    {
        public List<int> ListarFavoritos(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT Receita_id FROM ReceitasFavoritas WHERE Usuario_id = @id;";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            var idReceitasFavoritas = new List<int>();

            while (dataReader.Read())
            {
                int idReceitaFavorito = int.Parse(dataReader["Receita_id"].ToString());

                idReceitasFavoritas.Add(idReceitaFavorito);
            }

            conexao.Close();
            return idReceitasFavoritas;
        }

        public void CasastrarReceitasFavoritas(ReceitaFavoritaDTO receitaFavorita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO ReceitasFavoritas (Receita_id, Usuario_id) VALUES (@receita_id, @usuario_id);";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@receita_id", receitaFavorita.Receita_id);
            comando.Parameters.AddWithValue("@usuario_id", receitaFavorita.Usuario_id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void RemoverFavoritos(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM ReceitasFavoritas WHERE Receita_id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
