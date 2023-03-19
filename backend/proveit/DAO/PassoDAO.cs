using MySql.Data.MySqlClient;
using proveit.DTO;

namespace proveit.DAO
{
    public class PassoDAO
    {
        public List<PassoDTO> ListarPassos(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT idPasso, PassoTexto, NumPasso, Receita_id FROM Passos INNER JOIN Receitas on Receitas.idReceita = Passos.Receita_id WHERE Receita_id = @id;";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id); 
            var dataReader = comando.ExecuteReader();

            var passos = new List<PassoDTO>();
            while (dataReader.Read())
            {
                var passo = new PassoDTO();
                passo.idPasso = int.Parse(dataReader["idPasso"].ToString());
                passo.Receita_id = int.Parse(dataReader["Receita_id"].ToString());
                passo.NumPasso = int.Parse(dataReader["NumPasso"].ToString());
                passo.PassoTexto = dataReader["PassoTexto"].ToString();

                passos.Add(passo);
            }

            conexao.Close();
            return passos;

        }

        public void CadastrarPassos(PassoDTO passo)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();
            // Inserindo os passos
            var query = @"INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES
						(@receita_id,@NumPasso,@PassoTexto)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@Receita_id", passo.Receita_id);
            comando.Parameters.AddWithValue("@NumPasso", passo.NumPasso);
            comando.Parameters.AddWithValue("@PassoTexto", passo.PassoTexto);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void AlterarPassos(PassoDTO passo)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Passos SET 
                        NumPasso = @numpasso,
                        PassoTexto = @PassoTexto,
                        Receita_id = @Receita_id
                        WHERE idPasso = @id";

            var comando = new MySqlCommand(query, conexao);

            comando.Parameters.AddWithValue("@id", passo.idPasso);
            comando.Parameters.AddWithValue("@Receita_id", passo.Receita_id);
            comando.Parameters.AddWithValue("@NumPasso", passo.NumPasso);
            comando.Parameters.AddWithValue("@PassoTexto", passo.PassoTexto);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
        public void DeletarPassos(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Passos WHERE idPasso = @id ";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
