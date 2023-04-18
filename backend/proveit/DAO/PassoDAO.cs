using MySql.Data.MySqlClient;
using proveit.DTO;

namespace proveit.DAO
{
    public class PassoDAO
    {
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
