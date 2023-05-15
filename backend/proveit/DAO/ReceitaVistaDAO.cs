using MySql.Data.MySqlClient;
using proveit.DTO;

namespace proveit.DAO
{
    public class ReceitaVistaDAO
    {
        public List<ReceitaVistaDTO> ListarReceitasVistas(int idUsuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM ReceitasVistas WHERE Usuario_id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", idUsuario);
            var dataReader = comando.ExecuteReader();

            var ReceitasVistas = new List<ReceitaVistaDTO>();
            while (dataReader.Read())
            {
                var ReceitaVistas = new ReceitaVistaDTO();
                ReceitaVistas.idReceitas_vistas = int.Parse(dataReader["idCategoria"].ToString());
                ReceitaVistas.Usuario_id = int.Parse(dataReader["Nome"].ToString());
                ReceitaVistas.Receita_id = int.Parse(dataReader["Nome"].ToString());

                ReceitasVistas.Add(ReceitaVistas);
            }

            conexao.Close();
            return ReceitasVistas;
        }

        public void CadastrarReceitaVistas(ReceitaVistaDTO receitaVista)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Receitas_vistas (Receita_id, Usuario_id) VALUES
                        (@receita_id, @usuario_id)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@receita_id", receitaVista.Receita_id);
            comando.Parameters.AddWithValue("@usuario_id", receitaVista.Usuario_id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
