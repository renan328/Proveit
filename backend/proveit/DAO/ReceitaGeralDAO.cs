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
        public ReceitaGeralDTO ListarReceitaUnica(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT idReceita, Receitas.Nome , TempoPreparo, Tempo, Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento, Receitas.Foto, Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes_Receita.idIngredientesReceita, Ingredientes_Receita.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Categoria FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario WHERE idReceita = @id;";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            ReceitaGeralDTO receita = null;

            while (dataReader.Read())
            {
                if (receita == null)
                {
                    receita = new ReceitaGeralDTO();
                    receita.idReceita = int.Parse(dataReader["idReceita"].ToString());
                    receita.NomeReceita = dataReader["Nome"].ToString();
                    receita.TempoPreparo = int.Parse(dataReader["TempoPreparo"].ToString());
                    receita.Tempo = dataReader["Tempo"].ToString();
                    receita.Porcoes = int.Parse(dataReader["Porcoes"].ToString());
                    receita.ValCalorico = int.Parse(dataReader["ValCalorico"].ToString());
                    receita.Descricao = dataReader["Descricao"].ToString();
                    receita.Categoria = dataReader["Categoria"].ToString();
                    receita.NomeTag = dataReader["NomeTag"].ToString();
                    receita.Aproveitamento = bool.Parse(dataReader["Aproveitamento"].ToString());
                    receita.Foto = dataReader["Foto"].ToString();

                    receita.Ingredientes = new List<Ingredientes_ReceitaDTO>();
                    receita.Passos = new List<PassoDTO>();
                }

                var listaIngredientes = receita.Ingredientes;
                var idIngrediente = int.Parse(dataReader["idIngredientesReceita"].ToString());

                if (listaIngredientes.Any(x => x.idIngredientesReceita == idIngrediente) == false)
                {
                    //Não existe ingrediente na lista
                    var ingredientes = new Ingredientes_ReceitaDTO();
                    ingredientes.idIngredientesReceita = idIngrediente;
                    ingredientes.NomeIngrediente = dataReader["NomeIngrediente"].ToString();
                    ingredientes.Quantidade = int.Parse(dataReader["Quantidade"].ToString());
                    ingredientes.Medida = dataReader["Medida"].ToString();

                    receita.Ingredientes.Add(ingredientes);
                }


                var listaPassos = receita.Passos;
                var idPasso = int.Parse(dataReader["idPasso"].ToString());

                if (listaPassos.Any(x => x.idPasso == idPasso) == false)
                {
                    //Não existe passo na lista

                    var passo = new PassoDTO();
                    passo.idPasso = idPasso;
                    passo.NumPasso = int.Parse(dataReader["NumPasso"].ToString());
                    passo.PassoTexto = dataReader["PassoTexto"].ToString();
                    receita.Passos.Add(passo);
                }

            }

            conexao.Close();
            return receita;
        } 

        // ListarReceitas
        public List<ReceitaGeralDTO> ListarReceitas()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();


            var query = "SELECT idReceita, Receitas.Nome AS NomeReceita, TempoPreparo,Tempo, Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento, Receitas.Foto, Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes_Receita.idIngredientesReceita, Ingredientes_Receita.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Categoria FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario";
            var comando = new MySqlCommand(query, conexao);
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
                    newReceita.NomeReceita = dataReader["NomeReceita"].ToString();
                    newReceita.TempoPreparo = int.Parse(dataReader["TempoPreparo"].ToString());
                    newReceita.Tempo = dataReader["Tempo"].ToString();
                    newReceita.Porcoes = int.Parse(dataReader["Porcoes"].ToString());
                    newReceita.ValCalorico = int.Parse(dataReader["ValCalorico"].ToString());
                    newReceita.Descricao = dataReader["Descricao"].ToString();
                    newReceita.Categoria = dataReader["Categoria"].ToString();
                    newReceita.NomeTag = dataReader["NomeTag"].ToString();
                    newReceita.Aproveitamento = bool.Parse(dataReader["Aproveitamento"].ToString());
                    newReceita.Foto = (dataReader["Foto"].ToString());

                    newReceita.Ingredientes = new List<Ingredientes_ReceitaDTO>();
                    newReceita.Passos = new List<PassoDTO>();

                    receitas.Add(newReceita);
                }

                var receita = receitas.First(x => x.idReceita == idReceita);

                var listaIngredientes = receita.Ingredientes;
                var idIngrediente = int.Parse(dataReader["idIngredientesReceita"].ToString());

                if (listaIngredientes.Any(x => x.idIngredientesReceita == idIngrediente) == false)
                {
                    //Não existe ingrediente na lista
                    var ingredientes = new Ingredientes_ReceitaDTO();
                    ingredientes.idIngredientesReceita = idIngrediente;
                    ingredientes.NomeIngrediente = dataReader["NomeIngrediente"].ToString();
                    ingredientes.Quantidade = int.Parse(dataReader["Quantidade"].ToString());
                    ingredientes.Medida = dataReader["Medida"].ToString();

                    receita.Ingredientes.Add(ingredientes);
                }


                var listaPassos = receita.Passos;
                var idPasso = int.Parse(dataReader["idPasso"].ToString());

                if (listaPassos.Any(x => x.idPasso == idPasso) == false)
                {
                    //Não existe passo na lista

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

        public void CadastrarReceita(ReceitaGeralDTO receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            // Inserindo receita
            var queryReceita = @"INSERT INTO Receitas (Nome, TempoPreparo, Tempo, Porcoes, ValCalorico, Descricao, Usuario_id, Categoria, Aproveitamento, Foto) VALUES
						(@nome,@tempoPreparo, @tempo, @porcoes,@valCalorico, @descricao, @usuario_id, @categoria, @aproveitamento, @foto);   SELECT LAST_INSERT_ID();";

            var comando = new MySqlCommand(queryReceita, conexao);

            comando.Parameters.AddWithValue("@nome", receita.NomeReceita);
            comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
            comando.Parameters.AddWithValue("@tempo", receita.Tempo);
            comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
            comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
            comando.Parameters.AddWithValue("@descricao", receita.Descricao);
            comando.Parameters.AddWithValue("@usuario_id", receita.Usuario_id);
            comando.Parameters.AddWithValue("@categoria", receita.Categoria);
            comando.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);
            comando.Parameters.AddWithValue("@foto", receita.Foto);
            int idReceita = Convert.ToInt32(comando.ExecuteScalar());

            // Inserindo ingredientes
            foreach (var ingrediente in receita.Ingredientes)
            {
                var queryIngrediente = @"INSERT INTO Ingredientes_Receita (Nome, Quantidade, Medida, Receita_id) VALUES
						(@nome, @quantidade,@medida,@receita_id);";

                var comandoIngrediente = new MySqlCommand(queryIngrediente, conexao);
                comandoIngrediente.Parameters.AddWithValue("@nome", ingrediente.NomeIngrediente);
                comandoIngrediente.Parameters.AddWithValue("@quantidade", ingrediente.Quantidade);
                comandoIngrediente.Parameters.AddWithValue("@medida", ingrediente.Medida);
                comandoIngrediente.Parameters.AddWithValue("@receita_id", idReceita);

                comandoIngrediente.ExecuteNonQuery();
            } 

            // Inserindo passos
            foreach (var passo in receita.Passos)
            {
                var queryPassos = @"INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES
						(@receita_id,@NumPasso,@PassoTexto)";

                var comandoPassos = new MySqlCommand(queryPassos, conexao);
                comandoPassos.Parameters.AddWithValue("@Receita_id", idReceita);
                comandoPassos.Parameters.AddWithValue("@NumPasso", passo.NumPasso);
                comandoPassos.Parameters.AddWithValue("@PassoTexto", passo.PassoTexto);

                comandoPassos.ExecuteNonQuery();
            }

            conexao.Close();
        }

        public void AlterarReceita(ReceitaGeralDTO receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var queryReceita = @"UPDATE Receitas SET 
                        Nome = @nome,
                        TempoPreparo = @tempoPreparo,
                        Tempo = @tempo,
                        Porcoes =@porcoes,
                        ValCalorico =@valCalorico,
                        Categorias_id = @categorias_id,
                        Aproveitamento = @Aproveitamento
                        WHERE idReceita = @id";

            var comando = new MySqlCommand(queryReceita, conexao);

            comando.Parameters.AddWithValue("@id", receita.idReceita);
            comando.Parameters.AddWithValue("@nome", receita.NomeReceita);
            comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
            comando.Parameters.AddWithValue("@tempo", receita.Tempo);
            comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
            comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
            comando.Parameters.AddWithValue("@categoria", receita.Categoria);
            comando.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);
            comando.ExecuteNonQuery();

            foreach (var ingrediente in receita.Ingredientes)
            {
                var queryIngrediente = @"UPDATE Ingredientes_Receita SET
                            Nome = @nome,
                            Quantidade = @quantidade,
                            Medida = @medida,
                            Receita_id = @receita_id
                            WHERE idIngredientesReceita = @id";

                var comandoIngrediente = new MySqlCommand(queryIngrediente, conexao);
                comandoIngrediente.Parameters.AddWithValue("@id", ingrediente.idIngredientesReceita);
                comandoIngrediente.Parameters.AddWithValue("@nome", ingrediente.NomeIngrediente);
                comandoIngrediente.Parameters.AddWithValue("@quantidade", ingrediente.Quantidade);
                comandoIngrediente.Parameters.AddWithValue("@medida", ingrediente.Medida);
                comandoIngrediente.Parameters.AddWithValue("@receita_id", ingrediente.Receita_id);

                comandoIngrediente.ExecuteNonQuery();
            }

            foreach (var passo in receita.Passos)
            {
                var queryPassos = @"UPDATE Passos SET 
                        NumPasso = @numpasso,
                        PassoTexto = @PassoTexto,
                        Receita_id = @Receita_id
                        WHERE idPasso = @id";

                var comandoPassos = new MySqlCommand(queryPassos, conexao);

                comandoPassos.Parameters.AddWithValue("@id", passo.idPasso);
                comandoPassos.Parameters.AddWithValue("@Receita_id", passo.Receita_id);
                comandoPassos.Parameters.AddWithValue("@NumPasso", passo.NumPasso);
                comandoPassos.Parameters.AddWithValue("@PassoTexto", passo.PassoTexto);
                comandoPassos.ExecuteNonQuery();
            }

            conexao.Close();
        }

        public void RemoverReceita(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Receitas WHERE idReceita = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

    }
}

