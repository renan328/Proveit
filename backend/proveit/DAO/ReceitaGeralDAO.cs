using MySql.Data.MySqlClient;
using proveit.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;

namespace proveit.DAO
{
    public class ReceitaGeralDAO
    {
        public List<ReceitaGeralDTO> ListarReceitas(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();


            var query = "select idReceita, Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento,  Passos.PassoTexto, Passos.NumPasso, Ingredientes.Nome as NomeIngrediente, Ingredientes_receita.Quantidade, Ingredientes_receita.Medida, Categorias.Nome from Receitas inner join Passos on Passos.Receita_id = Receitas.idReceita inner join Ingredientes_receita on Ingredientes_receita.Receita_id = Receitas.idReceita inner join Ingredientes on Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id inner join Usuarios on Receitas.Usuario_id = Usuarios.idUsuario inner join Categorias on Categorias.idCategoria = Receitas.Categorias_id order by NumPasso ASC;";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            var receitas = new List<ReceitaGeralDTO>();

            while (dataReader.Read())
            {

                var receita = new    ReceitaGeralDTO();

                if (receita.idReceita == 0)
                {
                    receita.idReceita = int.Parse(dataReader["idReceita"].ToString());
                    receita.NomeReceita = dataReader["Nome"].ToString();
                    receita.TempoPreparo = int.Parse(dataReader["TempoPreparo"].ToString());
                    receita.Porcoes = int.Parse(dataReader["Porcoes"].ToString());
                    receita.ValCalorico = int.Parse(dataReader["ValCalorico"].ToString());
                    receita.Descricao = dataReader["Descricao"].ToString();
                    receita.NomeTag = dataReader["NomeTag"].ToString();
                    receita.Aproveitamento = bool.Parse(dataReader["Aproveitamento"].ToString());

                }

                var ingredientes = new Ingredientes_ReceitaDTO();
                ingredientes.NomeIngrediente = dataReader["NomeIngrediente"].ToString();
                ingredientes.Quantidade = int.Parse(dataReader["Quantidade"].ToString());
                ingredientes.Medida = dataReader["Medida"].ToString();
                receita.Ingredientes = new List<Ingredientes_ReceitaDTO>();
                receita.Ingredientes.Add(ingredientes);

                var passo = new PassoDTO();
               // passo.idPasso = int.Parse(dataReader["idPasso"].ToString());
                passo.NumPasso = int.Parse(dataReader["NumPasso"].ToString());
                passo.PassoTexto = dataReader["PassoTexto"].ToString();
                receita.Passos = new List<PassoDTO>();
                receita.Passos.Add(passo);

                receitas.Add(receita);
            }

            conexao.Close();
            return receitas;
        }
    }
}
