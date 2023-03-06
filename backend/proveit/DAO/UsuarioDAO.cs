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

            var query = "SELECT*FROM Usuarios;";

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

                usuarios.Add(usuario);
            }

            conexao.Close();
            return usuarios;
        }

        public void CadastrarUsuario(UsuarioDTO usuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Usuarios (Nome, NomeTag, Email, Senha, Categorias_id) VALUES
						(@nome,@nometag,@email,@senha, @categorias_id)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", usuario.Nome);
            comando.Parameters.AddWithValue("@nometag", usuario.NomeTag);
            comando.Parameters.AddWithValue("@email", usuario.Email);
            comando.Parameters.AddWithValue("@senha", usuario.Senha);
            comando.Parameters.AddWithValue("@categorias_id", usuario.Categorias_id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void AlterarUsuario(UsuarioDTO usuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Usuarios SET 
                        Nome = @nome,
                        NomeTag = @nomeTag,
                        Email =@email,
                        Senha =@senha,
                        Categorias_id = @categorias_id
                        WHERE idUsuario = @id";

            var comando = new MySqlCommand(query, conexao);

                comando.Parameters.AddWithValue("@id", usuario.idUsuario);
                comando.Parameters.AddWithValue("@nome", usuario.Nome);
                comando.Parameters.AddWithValue("@nomeTag", usuario.NomeTag);
                comando.Parameters.AddWithValue("@email", usuario.Email);
                comando.Parameters.AddWithValue("@senha", usuario.Senha);
                comando.Parameters.AddWithValue("@categorias_id", usuario.Categorias_id);
            

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
