﻿using MySql.Data.MySqlClient;
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

        public void CadastrarRceita(ReceitaDTO receita, Ingredientes_ReceitaDTO ingredientes_Receita, PassoDTO passo)
        {
            try
            {
                var transacao = SqlTransaction.BeginTransaction();
                var conexao = ConnectionFactory.Build();
                conexao.Open();


                // Inserindo a receita
                var query = @"INSERT INTO Receitas (Nome, TempoPreparo, Porcoes, ValCalorico, Descricao, Usuario_id, Categorias_id, Aproveitamento) VALUES
						(@nome,@tempoPreparo,@porcoes,@valCalorico, @descricao, @usuario_id, , @categorias_id, @aproveitamento)";

                var comando = new MySqlCommand(query, conexao, transacao);
                comando.Parameters.AddWithValue("@nome", receita.Nome);
                comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
                comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
                comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
                comando.Parameters.AddWithValue("@descricao", receita.Descricao);
                comando.Parameters.AddWithValue("@usuario_id", receita.Usuario_id);
                comando.Parameters.AddWithValue("@passos", receita.Usuario_id);
                comando.Parameters.AddWithValue("@categorias_id", receita.Categoria_id);
                comando.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);

                comando.ExecuteNonQuery();


                // Inserindo os passos
                query = @"INSERT INTO Passos (Receita_id, NumPasso, PassoTexto) VALUES
						(@receita_id,@NumPasso,@PassoTexto)";

                comando.Parameters.AddWithValue("@Receita_id", passo.Receita_id);
                comando.Parameters.AddWithValue("@NumPasso", passo.NumPasso);
                comando.Parameters.AddWithValue("@PassoTexto", passo.PassoTexto);

                comando.ExecuteNonQuery();


                // Inserindo em Ingredientes_receita
                query = @"INSERT INTO Ingredientes_Receita (Quantidade, Medida, Receita_id, Ingredientes_id) VALUES
						(@quantidade,@medida,@receita_id, @ingredientes_id)";

                comando.Parameters.AddWithValue("@NumPasso", ingredientes_Receita.Quantidade);
                comando.Parameters.AddWithValue("@NumPasso", ingredientes_Receita.Medida);
                comando.Parameters.AddWithValue("@NumPasso", ingredientes_Receita.Receita_id);
                comando.Parameters.AddWithValue("@NumPasso", ingredientes_Receita.Ingredientes_id);

                comando.ExecuteNonQuery();
                conexao.Close();

                transacao.Commit();
            }
            catch(Exception ex)
            {
                transacao.Rollbacj();
                throw ex;
            }


            
        }

        public void AlterarReceita(ReceitaDTO receita)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Receitas SET 
                        Nome = @nome,
                        TempoPreparo = @tempoPreparo,
                        Porcoes =@porcoes,
                        ValCalorico =@valCalorico,
                        Passo_id = @passo_id
                        Usuario_id =@usuario_id,
                        Ingrediente_id =@ingrediente_id,
                        Categorias_id = @categorias_id,
                        Aproveitamento = @Aproveitamento
                        WHERE idReceita = @id";

            var comando = new MySqlCommand(query, conexao);

            comando.Parameters.AddWithValue("@id", receita.idRceita);
            comando.Parameters.AddWithValue("@nome", receita.Nome);
            comando.Parameters.AddWithValue("@tempoPreparo", receita.TempoPreparo);
            comando.Parameters.AddWithValue("@porcoes", receita.Porcoes);
            comando.Parameters.AddWithValue("@valCalorico", receita.ValCalorico);
            comando.Parameters.AddWithValue("@passo_id", receita.Passo_id);
            comando.Parameters.AddWithValue("@usuario_id", receita.Usuario_id);
            comando.Parameters.AddWithValue("@ingrediente_id", receita.Ingrediente_id);
            comando.Parameters.AddWithValue("@categoria_id", receita.Categoria_id);
            comando.Parameters.AddWithValue("@aproveitamento", receita.Aproveitamento);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void RemoverReceita(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM Receita WHERE idReceita = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
