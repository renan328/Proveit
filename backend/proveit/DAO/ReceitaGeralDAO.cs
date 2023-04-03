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
        public List<ReceitaGeralDTO> ListarReceitaUnica(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();


            var query = "SELECT idReceita, Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento,  Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Ingredientes_Receita.Ingredientes_id, Categorias.Nome, Avaliacao.idAvaliacao, Avaliacao.Estrelas, Avaliacao.Comentario, Avaliacao.Receita_id, Avaliacao.Usuario_id FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_Receita.Ingredientes_id INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id INNER JOIN Avaliacao ON Avaliacao.Receita_id = Receitas.idReceita WHERE idReceita = @id";
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
                    newReceita.Avaliacoes = new List<AvaliacaoDTO>();

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
                    //Não existe passo na lista

                    var passo = new PassoDTO();
                    passo.idPasso = idPasso;
                    passo.NumPasso = int.Parse(dataReader["NumPasso"].ToString());
                    passo.PassoTexto = dataReader["PassoTexto"].ToString();
                    receita.Passos.Add(passo);
                }

                var listaAvaliacoes = receita.Avaliacoes;
                var idAvaliacao = int.Parse(dataReader["idAvaliacao"].ToString());

                if (listaAvaliacoes.Any(x => x.idAvaliacao == idAvaliacao) == false)
                {
                    // Não existe avaliacao na lista

                    var avaliacao = new AvaliacaoDTO();
                    avaliacao.idAvaliacao = idAvaliacao;
                    avaliacao.Estrelas = int.Parse(dataReader["Estrelas"].ToString());
                    avaliacao.Comentario = dataReader["Comentario"].ToString();
                    avaliacao.Receita_id = int.Parse(dataReader["Receita_id"].ToString());
                    avaliacao.Usuario_id = int.Parse(dataReader["Usuario_id"].ToString());
                    receita.Avaliacoes.Add(avaliacao);
                }

            }

            conexao.Close();
            return receitas;
        }

        // ListarReceitas
        public List<ReceitaGeralDTO> ListarReceitas()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();


            var query = "SELECT idReceita, Receitas.Nome , TempoPreparo,Porcoes,ValCalorico, Descricao, Usuarios.NomeTag, Aproveitamento,  Passos.PassoTexto, Passos.NumPasso, Passos.idPasso, Ingredientes.Nome AS NomeIngrediente, Ingredientes_Receita.Quantidade, Ingredientes_Receita.Medida, Ingredientes_Receita.Ingredientes_id, Categorias.Nome, Avaliacao.idAvaliacao, Avaliacao.Estrelas, Avaliacao.Comentario, Avaliacao.Receita_id, Avaliacao.Usuario_id FROM Receitas INNER JOIN Passos ON Passos.Receita_id = Receitas.idReceita INNER JOIN Ingredientes_Receita ON Ingredientes_Receita.Receita_id = Receitas.idReceita INNER JOIN Ingredientes ON Ingredientes.idIngredientes = Ingredientes_Receita.Ingredientes_id INNER JOIN Usuarios ON Receitas.Usuario_id = Usuarios.idUsuario INNER JOIN Categorias ON Categorias.idCategoria = Receitas.Categorias_id INNER JOIN Avaliacao ON Avaliacao.Receita_id = Receitas.idReceita";
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
                    newReceita.NomeReceita = dataReader["Nome"].ToString();
                    newReceita.TempoPreparo = int.Parse(dataReader["TempoPreparo"].ToString());
                    newReceita.Porcoes = int.Parse(dataReader["Porcoes"].ToString());
                    newReceita.ValCalorico = int.Parse(dataReader["ValCalorico"].ToString());
                    newReceita.Descricao = dataReader["Descricao"].ToString();
                    newReceita.NomeTag = dataReader["NomeTag"].ToString();
                    newReceita.Aproveitamento = bool.Parse(dataReader["Aproveitamento"].ToString());

                    newReceita.Ingredientes = new List<Ingredientes_ReceitaDTO>();
                    newReceita.Passos = new List<PassoDTO>();
                    newReceita.Avaliacoes = new List<AvaliacaoDTO>();

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
                    //Não existe passo na lista

                    var passo = new PassoDTO();
                    passo.idPasso = idPasso;
                    passo.NumPasso = int.Parse(dataReader["NumPasso"].ToString());
                    passo.PassoTexto = dataReader["PassoTexto"].ToString();
                    receita.Passos.Add(passo);
                }

                var listaAvaliacoes = receita.Avaliacoes;
                var idAvaliacao = int.Parse(dataReader["idAvaliacao"].ToString());

                if (listaAvaliacoes.Any(x => x.idAvaliacao == idAvaliacao) == false)
                {
                    // Não existe avaliacao na lista

                    var avaliacao = new AvaliacaoDTO();
                    avaliacao.idAvaliacao = idAvaliacao;
                    avaliacao.Estrelas = int.Parse(dataReader["Estrelas"].ToString());
                    avaliacao.Comentario = dataReader["Comentario"].ToString();
                    avaliacao.Receita_id = int.Parse(dataReader["Receita_id"].ToString());
                    avaliacao.Usuario_id = int.Parse(dataReader["Usuario_id"].ToString());
                    receita.Avaliacoes.Add(avaliacao);
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
            var queryReceita = @"INSERT INTO Receitas (Nome, TempoPreparo, Porcoes, ValCalorico, Descricao, Usuario_id, Categorias_id, Aproveitamento) VALUES
						(@nome,@tempoPreparo,@porcoes,@valCalorico, @descricao, @usuario_id, @categorias_id, @aproveitamento);   SELECT LAST_INSERT_ID();";

            var comando = new MySqlCommand(queryReceita, conexao);

            comando.Parameters.AddWithValue("@nome", receita.NomeReceita);
            comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
            comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
            comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
            comando.Parameters.AddWithValue("@descricao", receita.Descricao);
            comando.Parameters.AddWithValue("@usuario_id", receita.Usuario_id);
            comando.Parameters.AddWithValue("@categorias_id", receita.Categoria_id);
            comando.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);
            int idReceita = Convert.ToInt32(comando.ExecuteScalar());

            // Inserindo ingredientes
            foreach (var ingrediente in receita.Ingredientes)
            {
                var queryIngrediente = @"INSERT INTO Ingredientes_Receita (Quantidade, Medida, Receita_id, Ingredientes_id) VALUES
						(@quantidade,@medida,@receita_id, @ingredientes_id);";

                var comandoIngrediente = new MySqlCommand(queryIngrediente, conexao);
                comandoIngrediente.Parameters.AddWithValue("@quantidade", ingrediente.Quantidade);
                comandoIngrediente.Parameters.AddWithValue("@medida", ingrediente.Medida);
                comandoIngrediente.Parameters.AddWithValue("@receita_id", idReceita);
                comandoIngrediente.Parameters.AddWithValue("@ingredientes_id", ingrediente.Ingredientes_id);

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

    }
}

