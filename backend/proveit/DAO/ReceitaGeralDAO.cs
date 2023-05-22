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
        
        public List<ReceitaGeralDTO> ListarReceitasHome()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT idReceita, Receitas.Nome AS NomeReceita, Foto FROM Receitas";
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
                    newReceita.Foto = (dataReader["Foto"].ToString());

                    receitas.Add(newReceita);
                }
            }

            conexao.Close();
            return receitas;
        }

        // Listar receitas
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
                        (@nome,@tempoPreparo, @tempo, @porcoes,@valCalorico, @descricao, @usuario_id, @categoria, @aproveitamento, @foto);   SELECT LAST_INSERT_ID();";

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
                        Descricao = @descricao,
                        Usuario_id = usuario_id,
                        Categoria = @categoria,
                        Aproveitamento = @Aproveitamento,
                        Foto = @foto
                        WHERE idReceita = @id";

            var comando = new MySqlCommand(queryReceita, conexao);

            comando.Parameters.AddWithValue("@id", receita.idReceita);
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
            comando.ExecuteNonQuery();

            var idReceita = receita.idReceita;

            // ingredientes
            foreach (var ingrediente in receita.Ingredientes)
            {
                var queryIngrediente = @"UPDATE Ingredientes_Receita SET
                            Nome = @nome,
                            Quantidade = @quantidade,
                            Medida = @medida
                            WHERE Receita_id = @id";

                var comandoIngrediente = new MySqlCommand(queryIngrediente, conexao);
                comandoIngrediente.Parameters.AddWithValue("@nome", ingrediente.NomeIngrediente);
                comandoIngrediente.Parameters.AddWithValue("@quantidade", ingrediente.Quantidade);
                comandoIngrediente.Parameters.AddWithValue("@medida", ingrediente.Medida);
                comandoIngrediente.Parameters.AddWithValue("@id", idReceita);

                comandoIngrediente.ExecuteNonQuery();
            }

            // passos
            foreach (var passo in receita.Passos)
            {
                var queryPassos = @"UPDATE Passos SET 
                        NumPasso = @numpasso,
                        PassoTexto = @PassoTexto
                        WHERE Receita_id = @id";

                var comandoPassos = new MySqlCommand(queryPassos, conexao);
                comandoPassos.Parameters.AddWithValue("@Receita_id", idReceita);
                comandoPassos.Parameters.AddWithValue("@NumPasso", passo.NumPasso);
                comandoPassos.Parameters.AddWithValue("@PassoTexto", passo.PassoTexto);
                comandoPassos.Parameters.AddWithValue("@id", idReceita);

                comandoPassos.ExecuteNonQuery();
            }
            conexao.Close();
        }

        public void RemoverReceita(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var queryAvaliacao= @"DELETE FROM Avaliacao WHERE Receita_id = @id";
            var comandoAvaliacao = new MySqlCommand(queryAvaliacao, conexao);
            comandoAvaliacao.Parameters.AddWithValue("@id", id);
            comandoAvaliacao.ExecuteNonQuery();

            var queryIngrediente = @"DELETE FROM Ingredientes_Receita WHERE Receita_id = @id";
            var comandoIngredientes = new MySqlCommand(queryIngrediente, conexao);
            comandoIngredientes.Parameters.AddWithValue("@id", id);
            comandoIngredientes.ExecuteNonQuery();

            var queryPasso = @"DELETE FROM Passos WHERE Receita_id = @id";
            var comandoPasso = new MySqlCommand(queryPasso, conexao);
            comandoPasso.Parameters.AddWithValue("@id", id);
            comandoPasso.ExecuteNonQuery();

            var queryReceita = @"DELETE FROM Receitas WHERE idReceita = @id";
            var comando = new MySqlCommand(queryReceita, conexao);
            comando.Parameters.AddWithValue("@id", id);
            comando.ExecuteNonQuery();

            conexao.Close();
        }

    }
}

