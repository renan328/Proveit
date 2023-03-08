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

            var query = "SELECT*FROM Receitas;";

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
                receita.Usuario_id = int.Parse(dataReader["Usuario_id"].ToString());
                receita.Ingrediente_id = int.Parse(dataReader["Ingrediente_id"].ToString());
                receita.Passo_id = int.Parse(dataReader["Passo"].ToString());
                receita.Categoria_id = int.Parse(dataReader["Categoria_id"].ToString());
                receita.Aproveitamento = bool.Parse(dataReader["Categoria_id"].ToString());

                receitas.Add(receita);
            }

            conexao.Close();
            return receitas;
        }

        public void CadastrarRceita(ReceitaDTO receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Receitas (Nome, TempoPreparo, Porcoes, ValCalorico, Passo_id, Descricao, Usuario_id, Ingrediente_id, Categoria_id, Aproveitamento) VALUES
						(@nome,@tempoPreparo,@porcoes,@valCalorico, @passo_id, @descricao, @usuario_id, @ingrediente_id, @categoria_id, @aproveitamento)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", receita.Nome);
            comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
            comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
            comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
            comando.Parameters.AddWithValue("@passo_id", receita.Passo_id);
            comando.Parameters.AddWithValue("@descricao", receita.Descricao);

            comando.Parameters.AddWithValue("@descricao", receita.Descricao);
            comando.Parameters.AddWithValue("@descricao", receita.Descricao);
            comando.Parameters.AddWithValue("@descricao", receita.Descricao);

        }
    }
}
