using MySql.Data.MySqlClient;
using Org.BouncyCastle.Bcpg.OpenPgp;
using proveit.DTO;

namespace proveit.DAO
{
    public class Ingredientes_ReceitaDAO
    {
        public List<Ingredientes_ReceitaDTO> ListarIngredientesReceitas(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT idIngredientesReceita, Ingredientes.Nome, Quantidade, Medida, Receita_id FROM Ingredientes_Receita INNER JOIN Receitas on Receitas.idReceita = Ingredientes_Receita.Receita_id WHERE Receita_id = @id;";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            var ingredientes_Receita = new List<Ingredientes_ReceitaDTO>();
            while (dataReader.Read())
            {
                var ingrediente_Receita = new Ingredientes_ReceitaDTO();
                ingrediente_Receita.idIngredientesReceita = int.Parse(dataReader["idIngredientesReceita"].ToString());
                ingrediente_Receita.NomeIngrediente = dataReader["Nome"].ToString();
                ingrediente_Receita.Quantidade = int.Parse(dataReader["Quantidade"].ToString());
                ingrediente_Receita.Medida = dataReader["Medida"].ToString();
                ingrediente_Receita.Receita_id = int.Parse(dataReader["Receita_id"].ToString());

                ingredientes_Receita.Add(ingrediente_Receita);
            }

            conexao.Close();
            return ingredientes_Receita;

        }

        public void AlterarIngredientes_Receita(Ingredientes_ReceitaDTO Ingredientes_Receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Ingredientes_Receita SET 
                        Quantidade = @Quantidade,
                        Medida = @Medida,
                        Receita_id = @Receita_id,
                        Ingredientes_id = @Ingredientes_id
                        WHERE idIngredientesReceita = @id";

            var comando = new MySqlCommand(query, conexao);

            comando.Parameters.AddWithValue("@id", Ingredientes_Receita.idIngredientesReceita);
            comando.Parameters.AddWithValue("@Quantidade", Ingredientes_Receita.Quantidade);
            comando.Parameters.AddWithValue("@Medida", Ingredientes_Receita.Medida);
            comando.Parameters.AddWithValue("@Receita_id", Ingredientes_Receita.Receita_id);
            comando.Parameters.AddWithValue("@idIngredientesReceita", Ingredientes_Receita.idIngredientesReceita);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void DeletarIngredientes_Receita(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Ingredientes_Receita WHERE idIngredientesReceita = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

    }
}
