using MySql.Data.MySqlClient;
using proveit.DTO;
using System.Reflection.Metadata;

namespace proveit.DAO
{
    public class FotoReceitaDAO
    {
        public List<FotoReceitaDTO> ListarFotos(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM FotosReceita inner join Receitas on FotosReceita.Receita_id = Receitas.idReceita where idReceita = @id;";
            
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            var fotos = new List<FotoReceitaDTO>();
            while (dataReader.Read())
            {
                var foto = new FotoReceitaDTO();
                foto.idFoto = int.Parse(dataReader["idFoto"].ToString());
                foto.Receita_id = int.Parse(dataReader["Receita_id"].ToString());
                foto.Foto = dataReader["Foto"].ToString();

                fotos.Add(foto);
            }

            return fotos;
            conexao.Close();

        }

        public void CadastrarFoto (FotoReceitaDTO foto)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            // Inserindo em FotosReceita
            var query = @"INSERT INTO FotosReceita (Receita_id, Foto) VALUES 
						(@receita_id, @foto)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@receita_id", foto.Receita_id);
            comando.Parameters.AddWithValue("@foto", foto.Foto);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void RemoverFoto(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM FotosReceita WHERE idFoto = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
