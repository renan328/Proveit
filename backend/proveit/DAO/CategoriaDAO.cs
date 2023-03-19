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

                categorias.Add(categoria);
            }

            conexao.Close();
            return categorias;
        }
    }
}
