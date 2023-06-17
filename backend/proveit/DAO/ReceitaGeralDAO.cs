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

        public List<ReceitaGeralDTO> ListarReceitasDoUsuario(int idUsuario)
        {

            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT idReceita, Receitas.Nome AS NomeReceita, Foto, Usuario_id FROM Receitas WHERE Usuario_id = @id;";
            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", idUsuario);
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

        public List<ReceitaGeralDTO> ListarReceitasComFiltro(string filtro)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = $"SELECT idReceita, Receitas.Nome AS NomeReceita, Foto FROM Receitas {filtro};";
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

        public List<ReceitaGeralDTO> Pesquisar(string palavra)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = $"SELECT idReceita, R.Nome AS NomeReceita, R.Foto, I.Nome FROM Receitas R INNER JOIN Ingredientes_Receita I ON R.IdReceita = I.Receita_id WHERE R.Nome like '%{palavra}%' OR I.Nome LIKE '%{palavra}%';";
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

        public List<ReceitaGeralDTO> PesquisarPorIngredientes(string[] ingredientes)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = $"SELECT R.idReceita, R.Nome AS NomeReceita, R.Foto FROM Receitas R WHERE EXISTS ( SELECT 1 FROM Ingredientes_Receita I1 WHERE I1.Receita_id = R.IdReceita AND I1.Nome LIKE '%{ingredientes[0]}%' ) AND EXISTS ( SELECT 1 FROM Ingredientes_Receita I2 WHERE I2.Receita_id = R.IdReceita AND I2.Nome LIKE '%{ingredientes[1]}%' ) AND EXISTS ( SELECT 1 FROM Ingredientes_Receita I3 WHERE I3.Receita_id = R.IdReceita AND I3.Nome LIKE '%{ingredientes[2]}%') AND EXISTS ( SELECT 1 FROM Ingredientes_Receita I4 WHERE I4.Receita_id = R.IdReceita AND I4.Nome LIKE '%{ingredientes[3]}%' ) AND EXISTS ( SELECT 1 FROM Ingredientes_Receita I5 WHERE I5.Receita_id = R.IdReceita AND I5.Nome LIKE '%{ingredientes[4]}%' );";
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

            if (receitas.Count == 0)
            {
                conexao.Open();
                var querySugestao = $"SELECT idReceita, R.Nome AS NomeReceita, R.Foto, I.Nome FROM Receitas R INNER JOIN Ingredientes_Receita I ON R.IdReceita = I.Receita_id WHERE I.Nome like '%{ingredientes[0]}%' OR I.Nome LIKE '%{ingredientes[1]}%' OR I.Nome LIKE '%{ingredientes[2]}%' OR I.Nome LIKE '%{ingredientes[3]}%' OR I.Nome LIKE '%{ingredientes[4]}%';";
                var comandoSugestao = new MySqlCommand(querySugestao, conexao);
                var dataReaderSugestao = comandoSugestao.ExecuteReader();

                while (dataReaderSugestao.Read())
                {
                    var idReceita = int.Parse(dataReaderSugestao["idReceita"].ToString());

                    if (receitas.Any(x => x.idReceita == idReceita) == false)
                    {
                        //Não existe receita na lista

                        var newReceita = new ReceitaGeralDTO();

                        newReceita.idReceita = idReceita;
                        newReceita.NomeReceita = dataReaderSugestao["NomeReceita"].ToString();
                        newReceita.Foto = (dataReaderSugestao["Foto"].ToString());

                        receitas.Add(newReceita);
                    }
                }

                conexao.Close();
            }

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

            try
            {
                // Atualiza os dados da receita
                var queryAtualizarReceita = @"UPDATE Receitas SET Nome = @nome, TempoPreparo = @tempoPreparo, Tempo = @tempo, Porcoes = @porcoes, ValCalorico = @valCalorico, Descricao = @descricao, Categoria = @categoria, Aproveitamento = @aproveitamento, Foto = @foto WHERE idReceita = @idReceita";

                var comandoAtualizarReceita = new MySqlCommand(queryAtualizarReceita, conexao);
                comandoAtualizarReceita.Parameters.AddWithValue("@nome", receita.NomeReceita);
                comandoAtualizarReceita.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
                comandoAtualizarReceita.Parameters.AddWithValue("@tempo", receita.Tempo);
                comandoAtualizarReceita.Parameters.AddWithValue("@porcoes", receita.Porcoes);
                comandoAtualizarReceita.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
                comandoAtualizarReceita.Parameters.AddWithValue("@descricao", receita.Descricao);
                comandoAtualizarReceita.Parameters.AddWithValue("@categoria", receita.Categoria);
                comandoAtualizarReceita.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);
                comandoAtualizarReceita.Parameters.AddWithValue("@foto", receita.Foto);
                comandoAtualizarReceita.Parameters.AddWithValue("@idReceita", receita.idReceita);

                comandoAtualizarReceita.ExecuteNonQuery();

                // Recupera os ingredientes existentes no banco de dados para a receita
                var queryIngredientesExistentes = "SELECT idIngredientesReceita, Nome, Quantidade, Medida FROM Ingredientes_Receita WHERE Receita_id = @idReceita";
                var comandoIngredientesExistentes = new MySqlCommand(queryIngredientesExistentes, conexao);
                comandoIngredientesExistentes.Parameters.AddWithValue("@idReceita", receita.idReceita);
                var dataReaderIngredientesExistentes = comandoIngredientesExistentes.ExecuteReader();

                // Lista para armazenar os IDs dos ingredientes existentes
                var ingredientesExistentesIds = new List<int>();

                while (dataReaderIngredientesExistentes.Read())
                {
                    var idIngrediente = int.Parse(dataReaderIngredientesExistentes["idIngredientesReceita"].ToString());
                    ingredientesExistentesIds.Add(idIngrediente);
                }

                dataReaderIngredientesExistentes.Close();

                // Adiciona ou atualiza os ingredientes da receita
                foreach (var ingrediente in receita.Ingredientes)
                {
                    if (ingrediente.idIngredientesReceita == 0)
                    {
                        // Novo ingrediente a ser adicionado
                        var queryInserirIngrediente = @"INSERT INTO Ingredientes_Receita (Nome, Quantidade, Medida, Receita_id) VALUES (@nome, @quantidade, @medida, @receita_id)";

                        var comandoInserirIngrediente = new MySqlCommand(queryInserirIngrediente, conexao);
                        comandoInserirIngrediente.Parameters.AddWithValue("@nome", ingrediente.NomeIngrediente);
                        comandoInserirIngrediente.Parameters.AddWithValue("@quantidade", ingrediente.Quantidade);
                        comandoInserirIngrediente.Parameters.AddWithValue("@medida", ingrediente.Medida);
                        comandoInserirIngrediente.Parameters.AddWithValue("@receita_id", receita.idReceita);

                        comandoInserirIngrediente.ExecuteNonQuery();
                    }
                    else
                    {
                        // Ingrediente existente a ser atualizado
                        var queryAtualizarIngrediente = @"UPDATE Ingredientes_Receita SET Nome = @nome, Quantidade = @quantidade, Medida = @medida WHERE idIngredientesReceita = @idIngrediente";

                        var comandoAtualizarIngrediente = new MySqlCommand(queryAtualizarIngrediente, conexao);
                        comandoAtualizarIngrediente.Parameters.AddWithValue("@nome", ingrediente.NomeIngrediente);
                        comandoAtualizarIngrediente.Parameters.AddWithValue("@quantidade", ingrediente.Quantidade);
                        comandoAtualizarIngrediente.Parameters.AddWithValue("@medida", ingrediente.Medida);
                        comandoAtualizarIngrediente.Parameters.AddWithValue("@idIngrediente", ingrediente.idIngredientesReceita);

                        comandoAtualizarIngrediente.ExecuteNonQuery();

                        // Remove o ID do ingrediente da lista de ingredientes existentes
                        ingredientesExistentesIds.Remove(ingrediente.idIngredientesReceita);
                    }
                }

                // Remove os ingredientes que foram removidos da lista de ingredientes da receita
                foreach (var ingredienteId in ingredientesExistentesIds)
                {
                    var queryRemoverIngrediente = "DELETE FROM Ingredientes_Receita WHERE idIngredientesReceita = @idIngrediente";

                    var comandoRemoverIngrediente = new MySqlCommand(queryRemoverIngrediente, conexao);
                    comandoRemoverIngrediente.Parameters.AddWithValue("@idIngrediente", ingredienteId);

                    comandoRemoverIngrediente.ExecuteNonQuery();
                }

                // Recupera os passos existentes no banco de dados para a receita
                var queryPassosExistentes = "SELECT idPasso, NumPasso, PassoTexto FROM Passos WHERE Receita_id = @idReceita";
                var comandoPassosExistentes = new MySqlCommand(queryPassosExistentes, conexao);
                comandoPassosExistentes.Parameters.AddWithValue("@idReceita", receita.idReceita);
                var dataReaderPassosExistentes = comandoPassosExistentes.ExecuteReader();

                // Lista para armazenar os IDs dos passos existentes
                var passosExistentesIds = new List<int>();

                while (dataReaderPassosExistentes.Read())
                {
                    var idPasso = int.Parse(dataReaderPassosExistentes["idPasso"].ToString());
                    passosExistentesIds.Add(idPasso);
                }

                dataReaderPassosExistentes.Close();

                // Adiciona ou atualiza os passos da receita
                foreach (var passo in receita.Passos)
                {
                    if (passo.idPasso == 0)
                    {
                        // Novo passo a ser adicionado
                        var queryInserirPasso = @"INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES (@receita_id, @numPasso, @passoTexto)";

                        var comandoInserirPasso = new MySqlCommand(queryInserirPasso, conexao);
                        comandoInserirPasso.Parameters.AddWithValue("@receita_id", receita.idReceita);
                        comandoInserirPasso.Parameters.AddWithValue("@numPasso", passo.NumPasso);
                        comandoInserirPasso.Parameters.AddWithValue("@passoTexto", passo.PassoTexto);

                        comandoInserirPasso.ExecuteNonQuery();
                    }
                    else
                    {
                        // Passo existente a ser atualizado
                        var queryAtualizarPasso = @"UPDATE Passos SET NumPasso = @numPasso, PassoTexto = @passoTexto WHERE idPasso = @idPasso";

                        var comandoAtualizarPasso = new MySqlCommand(queryAtualizarPasso, conexao);
                        comandoAtualizarPasso.Parameters.AddWithValue("@numPasso", passo.NumPasso);
                        comandoAtualizarPasso.Parameters.AddWithValue("@passoTexto", passo.PassoTexto);
                        comandoAtualizarPasso.Parameters.AddWithValue("@idPasso", passo.idPasso);

                        comandoAtualizarPasso.ExecuteNonQuery();

                        // Remove o ID do passo da lista de passos existentes
                        passosExistentesIds.Remove(passo.idPasso);
                    }
                }

                // Remove os passos que foram removidos da lista de passos da receita
                foreach (var passoId in passosExistentesIds)
                {
                    var queryRemoverPasso = "DELETE FROM Passos WHERE idPasso = @idPasso";

                    var comandoRemoverPasso = new MySqlCommand(queryRemoverPasso, conexao);
                    comandoRemoverPasso.Parameters.AddWithValue("@idPasso", passoId);

                    comandoRemoverPasso.ExecuteNonQuery();
                }

            }
            finally
            {
                conexao.Close();
            }
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