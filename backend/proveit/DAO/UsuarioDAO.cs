using MySql.Data.MySqlClient;
using proveit.DTO;
using System.Reflection.Metadata;

namespace proveit.DAO
{
    public class UsuarioDAO
    {
        public List<UsuarioDTO> ListarUsuarios()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Usuarios";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var usuarios = new List<UsuarioDTO>();

            while (dataReader.Read())
            {
                var usuario = new UsuarioDTO();

                usuario.idUsuario = int.Parse(dataReader["idUsuario"].ToString());
                usuario.Nome = dataReader["Nome"].ToString();
                usuario.NomeTag = dataReader["NomeTag"].ToString();
                usuario.Email = dataReader["Email"].ToString();
                usuario.Senha = dataReader["Senha"].ToString();
                // usuario.Foto = (dataReader["Foto"].ToString());
                usuario.Categorias_id = int.Parse(dataReader["Categorias_id"].ToString());
                usuario.Receitas_id = int.Parse(dataReader["Receitas_id"].ToString());
            }

            conexao.Close();
            return usuarios;
        }
    }
}
