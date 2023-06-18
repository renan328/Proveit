using MySql.Data.MySqlClient;
using proveit.DAO;

namespace proveit.DTO
{
    public class ReceitaFavoritaDAO
    {
        public List<ReceitaGeralDTO> ListarReceitasFavoritas(int idUsuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT Receitas.idReceita, Receitas.Nome AS NomeReceita, Receitas.Foto, ReceitasFavoritas.Usuario_id FROM ReceitasFavoritas INNER JOIN Receitas On ReceitasFavoritas.Receita_id = Receitas.idReceita WHERE ReceitasFavoritas.Usuario_id = @id;";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", idUsuario);
            var dataReader = comando.ExecuteReader();

            var receitas = new List<ReceitaGeralDTO>();

            while (dataReader.Read())
            {
                var idReceita = int.Parse(dataReader["idReceita"].ToString()); ;

                if (receitas.Any(x => x.idReceita == idReceita) == false)
                {
                    //Não existe receita na lista

                    var newReceita = new ReceitaGeralDTO();

                    newReceita.idReceita = idReceita;
                    newReceita.NomeReceita = dataReader["NomeReceita"].ToString();
                    newReceita.Foto = (dataReader["Foto"].ToString());

                    receitas.Add(newReceita);
                }
            }

            conexao.Close();
            return receitas;
        }

        public bool VerificaoFavorito(int idReceita, int idUsuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT Receita_id FROM ReceitasFavoritas WHERE Receita_id = @id AND Usuario_id = @idUsuario;";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", idReceita);
            comando.Parameters.AddWithValue("@idUsuario", idUsuario);
            var dataReader = comando.ExecuteReader();

            bool favorito = false;

            while (dataReader.Read())
            {
                var id = int.Parse(dataReader["Receita_id"].ToString());

                if (id == idReceita)
                {
                    favorito = true;
                }
                else if (id == 0 || id == null)
                {
                    favorito = false;
                }
            }

            conexao.Close();
            return favorito;
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

        public void RemoverFavoritos(int idReceita, int idUsuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM ReceitasFavoritas WHERE Receita_id = @idReceita AND Usuario_id = @idUsuario";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@idReceita", idReceita);
            comando.Parameters.AddWithValue("@idUsuario", idUsuario);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
