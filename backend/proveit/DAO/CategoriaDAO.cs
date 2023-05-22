using MySql.Data.MySqlClient;
using proveit.DTO;

namespace proveit.DAO
{
    public class CategoriaDAO
    {
        public List<CategoriaDTO> ListarTodasCategorias()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Categorias";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var categorias = new List<CategoriaDTO>();

            while (dataReader.Read())
            {
                var categoria = new CategoriaDTO();
                categoria.Categoria_id = int.Parse(dataReader["idCategoria"].ToString());
                categoria.Nome = dataReader["Nome"].ToString();
                categoria.Foto = dataReader["Foto"].ToString();

                categorias.Add(categoria);
            }

            conexao.Close();
            return categorias;

        }

        public List<CategoriaDTO> ListarCategoriasUnica(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Categorias WHERE idCategoria = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            var categorias = new List<CategoriaDTO>();

            while (dataReader.Read())
            {
                var categoria = new CategoriaDTO();
                categoria.Categoria_id = int.Parse(dataReader["idCategoria"].ToString());
                categoria.Nome = dataReader["Nome"].ToString();
                categoria.Foto = dataReader["Foto"].ToString();

                categorias.Add(categoria);
            }

            conexao.Close();
            return categorias;
        }

        public void CadastrarCategoria(CategoriaDTO categoria)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Categorias (Nome, Foto) VALUES
						(@nome, @foto)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", categoria.Nome);
            comando.Parameters.AddWithValue("@foto", categoria.Foto);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void AlterarCategoria(CategoriaDTO categoria)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Categorias SET 
                        Nome = @nome,
                        Foto = @foto
                        WHERE idCategorria = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", categoria.Categoria_id);
            comando.Parameters.AddWithValue("@nome", categoria.Nome);
            comando.Parameters.AddWithValue("@foto", categoria.Foto);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void DeletarCat(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Categorias WHERE idCategoria = @id ";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
