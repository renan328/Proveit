﻿using MySql.Data.MySqlClient;
using proveit.DTO;
using System.Security.Cryptography;

namespace proveit.DAO
{
    public class AvaliacaoDAO
    {
        public List<AvaliacaoDTO> ListarAvaliacaoDeReceita(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM Avaliacao INNER JOIN Receitas ON Avaliacao.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Avaliacao.Usuario_id = Usuarios.idUsuario WHERE Receita_id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);
            var dataReader = comando.ExecuteReader();

            var avaliacoes = new List<AvaliacaoDTO>();
            while (dataReader.Read())
            {
                var avaliacao = new AvaliacaoDTO();
                avaliacao.idAvaliacao = int.Parse(dataReader["idAvaliacao"].ToString());
                avaliacao.Estrelas = int.Parse(dataReader["Estrelas"].ToString());
                avaliacao.Comentario = dataReader["Comentario"].ToString();
                avaliacao.Receita_id = int.Parse(dataReader["Receita_id"].ToString());
                avaliacao.Usuario_id = int.Parse(dataReader["Usuarios_id"].ToString());

                avaliacoes.Add(avaliacao);
            }

            conexao.Close();
            return avaliacoes;
        }
        public List<AvaliacaoDTO> ListarAvaliacoes() 
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM Avaliacao INNER JOIN Receitas ON Avaliacao.Receita_id = Receitas.idReceita INNER JOIN Usuarios ON Avaliacao.Usuario_id = Usuarios.idUsuario";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var avaliacoes = new List<AvaliacaoDTO>();
            while (dataReader.Read()) 
            { 
                var avaliacao = new AvaliacaoDTO();
                avaliacao.idAvaliacao = int.Parse(dataReader["idAvaliacao"].ToString());
                avaliacao.Estrelas = int.Parse(dataReader["Estrelas"].ToString());
                avaliacao.Comentario = dataReader["Comentario"].ToString();
                avaliacao.Receita_id = int.Parse(dataReader["Receita_id"].ToString());
                avaliacao.Usuario_id = int.Parse(dataReader["Usuario_id"].ToString());

                avaliacoes.Add(avaliacao);
            }

            conexao.Close();
            return avaliacoes;
        }

        public void CadastrarAvaliacao(AvaliacaoDTO avaliacao)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();
            // Inserindo os passos
            var query = @"INSERT INTO Avaliacao (Estrelas, Comentario, Receita_id, Usuario_id) VALUES
						(@estrelas,@comentario,@receita_id,@usuario_id)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@estrelas", avaliacao.Estrelas);
            comando.Parameters.AddWithValue("@comentario", avaliacao.Comentario);
            comando.Parameters.AddWithValue("@Receita_id", avaliacao.Receita_id);
            comando.Parameters.AddWithValue("@usuario_id", avaliacao.Usuario_id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void AlterarAvaliacao(AvaliacaoDTO avaliacao)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Avaliacao SET 
                        Estrelas = @estrelas,
                        Comentario = @comentario,
                        Usuario_id = @usuario_id,
                        Receita_id = @Receita_id
                        WHERE idAvaliacao = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", avaliacao.idAvaliacao);
            comando.Parameters.AddWithValue("@estrelas", avaliacao.Estrelas);
            comando.Parameters.AddWithValue("@comentario", avaliacao.Comentario);
            comando.Parameters.AddWithValue("@Receita_id", avaliacao.Receita_id);
            comando.Parameters.AddWithValue("@usuario_id", avaliacao.Usuario_id);

            comando.ExecuteNonQuery();
            conexao.Close();

        }

        public void DeletarAvaliacao(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Avaliacao WHERE idAvaliacao = @id ";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
