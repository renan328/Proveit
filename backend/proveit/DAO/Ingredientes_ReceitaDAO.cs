using MySql.Data.MySqlClient;
using Org.BouncyCastle.Bcpg.OpenPgp;
using proveit.DTO;

namespace proveit.DAO
{
    public class Ingredientes_ReceitaDAO
    {
        public List<Ingredientes_ReceitaDTO> ListarIngredientesReceitas()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Ingredientes_Receita;";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var ingredientes_Receita = new List<Ingredientes_ReceitaDTO>();
            while (dataReader.Read())
            {
                var ingrediente_Receita = new Ingredientes_ReceitaDTO();
                ingrediente_Receita.idIngredientesReceita = int.Parse(dataReader["idIngredientesReceita"].ToString());
                ingrediente_Receita.Quantidade = int.Parse(dataReader["Quantidade"].ToString());
                ingrediente_Receita.Medida = dataReader["Medida"].ToString();
                ingrediente_Receita.Receita_id = int.Parse(dataReader["Receita_id"].ToString());
                ingrediente_Receita.Ingredientes_id = int.Parse(dataReader["Ingredientes_id"].ToString());

                ingredientes_Receita.Add(ingrediente_Receita);
            }

            conexao.Close();
            return ingredientes_Receita;

        }

        public void CadastrarIngredientesDeReceita(Ingredientes_ReceitaDTO ingredientes_Receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            // Inserindo em Ingredientes_receita
            var query = @"INSERT INTO Ingredientes_Receita (Quantidade, Medida, Receita_id, Ingredientes_id) VALUES
						(@quantidade,@medida,@receita_id, @ingredientes_id)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@quantidade", ingredientes_Receita.Quantidade);
            comando.Parameters.AddWithValue("@medida", ingredientes_Receita.Medida);
            comando.Parameters.AddWithValue("@receita_id", ingredientes_Receita.Receita_id);
            comando.Parameters.AddWithValue("@ingredientes_id", ingredientes_Receita.Ingredientes_id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
