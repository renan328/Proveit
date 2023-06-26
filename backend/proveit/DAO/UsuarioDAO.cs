using MySql.Data.MySqlClient;
using proveit.DTO;
using System.Reflection.Metadata;

namespace proveit.DAO
{
    public class UsuarioDAO
    {
        public UsuarioDTO Login(UsuarioDTO dadosLogin)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM Usuarios WHERE Email = @email AND Senha = @senha";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@email", dadosLogin.Email);
            comando.Parameters.AddWithValue("@senha", dadosLogin.Senha);

            var dataReader = comando.ExecuteReader();

            var usuario = new UsuarioDTO();
            while (dataReader.Read())
            {
                usuario.idUsuario = int.Parse(dataReader["idUsuario"].ToString());
                usuario.Nome = dataReader["Nome"].ToString();
                usuario.NomeTag = dataReader["NomeTag"].ToString();
                usuario.Email = dataReader["Email"].ToString();
                usuario.Senha = dataReader["Senha"].ToString();
                usuario.Foto = (dataReader["Foto"].ToString());
            }

            conexao.Close();
            return usuario;

        }
        public List<UsuarioDTO> ListarUsuarios()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM Usuarios;";

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
                usuario.Foto = (dataReader["Foto"].ToString());
                usuarios.Add(usuario);
            }

            conexao.Close();
            return usuarios;
        }

        public UsuarioDTO ListarUsuarioPorId(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM Usuarios WHERE idUsuario = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            var dataReader = comando.ExecuteReader();

            var usuario = new UsuarioDTO();
            while (dataReader.Read())
            {
                usuario.idUsuario = int.Parse(dataReader["idUsuario"].ToString());
                usuario.Nome = dataReader["Nome"].ToString();
                usuario.NomeTag = dataReader["NomeTag"].ToString();
                usuario.Email = dataReader["Email"].ToString();
                usuario.Senha = dataReader["Senha"].ToString();
                usuario.Foto = (dataReader["Foto"].ToString());
            }
            conexao.Close();

            return usuario;
        }

        public bool VerificarEmailExistente(string email)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT COUNT(*) FROM Usuarios WHERE Email = @email";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@email", email);
            var resultado = (long)comando.ExecuteScalar();

            conexao.Close();

            return resultado > 0;
        }

        public bool VerificarEmailExistenteAoAlterar(int id, string email)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT COUNT(*) FROM Usuarios WHERE idUsuario != @id AND Email = @email";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            comando.Parameters.AddWithValue("@email", email);
            var resultado = (long)comando.ExecuteScalar();

            conexao.Close();

            return resultado > 0;
        }

        public bool VerificarNomeTagExistente(string nomeTag)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT COUNT(*) FROM Usuarios WHERE NomeTag = @nomeTag";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nomeTag", nomeTag);
            var resultado = (long)comando.ExecuteScalar();

            conexao.Close();

            return resultado > 0;
        }

        public bool VerificarNomeTagExistenteAoAlterar(int id, string nomeTag)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT COUNT(*) FROM Usuarios WHERE idUsuario != @id AND NomeTag = @nomeTag";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            comando.Parameters.AddWithValue("@nomeTag", nomeTag);
            var resultado = (long)comando.ExecuteScalar();

            conexao.Close();

            return resultado > 0;
        }


        public void CadastrarUsuario(UsuarioDTO usuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Usuarios (Nome, Foto, NomeTag, Email, Senha) VALUES
                  (@nome, @foto, @nometag, @email, @senha)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", usuario.Nome);
            comando.Parameters.AddWithValue("@foto", usuario.Foto);
            comando.Parameters.AddWithValue("@nometag", usuario.NomeTag);
            comando.Parameters.AddWithValue("@email", usuario.Email);
            comando.Parameters.AddWithValue("@senha", usuario.Senha);

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
                        Foto = @foto
                        WHERE idUsuario = @id";

            var comando = new MySqlCommand(query, conexao);
            
            comando.Parameters.AddWithValue("@id", usuario.idUsuario);
            comando.Parameters.AddWithValue("@nome", usuario.Nome);
            comando.Parameters.AddWithValue("@nomeTag", usuario.NomeTag);
            comando.Parameters.AddWithValue("@email", usuario.Email);
            comando.Parameters.AddWithValue("@senha", usuario.Senha);
            comando.Parameters.AddWithValue("@foto", usuario.Foto);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
