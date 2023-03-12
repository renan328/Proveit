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

            var query = "SELECT idReceita, Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento FROM Receitas INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id;\r\n";

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
                receita.Descricao = dataReader["Descricao"].ToString();
                receita.UsuarioNomeTag = dataReader["NomeTag"].ToString();
                receita.Aproveitamento = bool.Parse(dataReader["Aproveitamento"].ToString());

                receitas.Add(receita);
            }

            conexao.Close();
            return receitas;
        }

        public void CadastrarRceita(ReceitaDTO receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            // Inserindo receita
            var query = @"INSERT INTO Receitas (Nome, TempoPreparo, Porcoes, ValCalorico, Descricao, Usuario_id, Categorias_id, Aproveitamento) VALUES
						(@nome,@tempoPreparo,@porcoes,@valCalorico, @descricao, @usuario_id, @categorias_id, @aproveitamento)";

            var comando = new MySqlCommand(query, conexao);

            comando.Parameters.AddWithValue("@nome", receita.Nome);
            comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
            comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
            comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
            comando.Parameters.AddWithValue("@descricao", receita.Descricao);
            comando.Parameters.AddWithValue("@usuario_id", receita.Usuario_id);
            comando.Parameters.AddWithValue("@categorias_id", receita.Categoria_id);
            comando.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void AlterarReceita(ReceitaDTO receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Receitas SET 
                        Nome = @nome,
                        TempoPreparo = @tempoPreparo,
                        Porcoes =@porcoes,
                        ValCalorico =@valCalorico,
                        Passo_id = @passo_id
                        Usuario_id =@usuario_id,
                        Ingrediente_id =@ingrediente_id,
                        Categorias_id = @categorias_id,
                        Aproveitamento = @Aproveitamento
                        WHERE idReceita = @id";

            var comando = new MySqlCommand(query, conexao);

            comando.Parameters.AddWithValue("@id", receita.idRceita);
            comando.Parameters.AddWithValue("@nome", receita.Nome);
            comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
            comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
            comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
            comando.Parameters.AddWithValue("@usuario_id", receita.Usuario_id);
            comando.Parameters.AddWithValue("@categoria_id", receita.Categoria_id);
            comando.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void RemoverReceita(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Receita WHERE idReceita = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
