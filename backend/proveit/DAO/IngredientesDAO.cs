using MySql.Data.MySqlClient;
using proveit.DTO;

namespace proveit.DAO
{
    public class IngredientesDAO
    {
        public List<IngredienteDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Ingredientes;";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var ingredientes = new List<IngredienteDTO>();

            while (dataReader.Read())
            {
                var ingrediente = new IngredienteDTO();

                ingrediente.idIngrediente = int.Parse(dataReader["idIngredientes"].ToString());
                ingrediente.Nome = dataReader["nome"].ToString();

                ingredientes.Add(ingrediente);
            }

            conexao.Close();
            return ingredientes;

        }
        public void Cadastrar(IngredienteDTO ingrediente)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            // Inserindo em Ingredientes_receita
            var query = @"INSERT INTO Ingredientes (Nome) VALUES
						(@nome)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", ingrediente.Nome);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
