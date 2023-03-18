using MySql.Data.MySqlClient;
using proveit.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;
using Mysqlx.Crud;

namespace proveit.DAO
{
    public class ReceitaGeralDAO
    {
        public List<ReceitaGeralDTO> ListarReceitas(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();


            var query = "SELECT idReceita, Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento,  Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes.Nome AS NomeIngrediente, Ingredientes_receita.Quantidade, Ingredientes_receita.Medida, Ingredientes_Receita.Ingredientes_id, Categorias.Nome FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_receita ON Ingredientes_receita.Receita_id = Receitas.idReceita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_receita.Ingredientes_id INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id where idReceita = @id";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            var receitas = new List<ReceitaGeralDTO>();

            while (dataReader.Read())
            {
                var idReceita = int.Parse(dataReader["idReceita"].ToString()); ;

                if (receitas.Any(x => x.idReceita == idReceita) == false)
                {
                    //Não existe receita na lista

                    var newReceita = new ReceitaGeralDTO();

                    newReceita.idReceita = idReceita;
                    newReceita.NomeReceita = dataReader["Nome"].ToString();
                    newReceita.TempoPreparo = int.Parse(dataReader["TempoPreparo"].ToString());
                    newReceita.Porcoes = int.Parse(dataReader["Porcoes"].ToString());
                    newReceita.ValCalorico = int.Parse(dataReader["ValCalorico"].ToString());
                    newReceita.Descricao = dataReader["Descricao"].ToString();
                    newReceita.NomeTag = dataReader["NomeTag"].ToString();
                    newReceita.Aproveitamento = bool.Parse(dataReader["Aproveitamento"].ToString());

                    newReceita.Ingredientes = new List<Ingredientes_ReceitaDTO>();
                    newReceita.Passos = new List<PassoDTO>();

                    receitas.Add(newReceita);
                }

                var receita = receitas.First(x => x.idReceita == idReceita);

                var listaIngredientes = receita.Ingredientes;
                var idIngrediente = int.Parse(dataReader["Ingredientes_id"].ToString());

                if (listaIngredientes.Any(x => x.Ingredientes_id == idIngrediente) == false)
                {
                    //Não existe ingrediente na lista
                    var ingredientes = new Ingredientes_ReceitaDTO();
                    ingredientes.Ingredientes_id = idIngrediente;
                    ingredientes.NomeIngrediente = dataReader["NomeIngrediente"].ToString();
                    ingredientes.Quantidade = int.Parse(dataReader["Quantidade"].ToString());
                    ingredientes.Medida = dataReader["Medida"].ToString();

                    receita.Ingredientes.Add(ingredientes);
                }


                var listaPassos = receita.Passos;
                var idPasso = int.Parse(dataReader["idPasso"].ToString());

                if (listaPassos.Any(x => x.idPasso == idPasso) == false)
                {
                    var passo = new PassoDTO();
                    passo.idPasso = idPasso;
                    passo.NumPasso = int.Parse(dataReader["NumPasso"].ToString());
                    passo.PassoTexto = dataReader["PassoTexto"].ToString();
                    receita.Passos.Add(passo);
                }

            }

            conexao.Close();
            return receitas;
        }
    }
}

