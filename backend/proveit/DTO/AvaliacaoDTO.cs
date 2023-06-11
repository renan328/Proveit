namespace proveit.DTO
{
    public class AvaliacaoDTO
    {
        public int idAvaliacao { get; set; }
        public int Estrelas { get; set; }
        public string Comentario { get; set; }
        public int Receita_id { get; set; }
        public int Usuario_id { get; set; }
        public string UsuarioNome { get; set; }
        public string UsuarioFoto { get; set; }
        public string NomeReceita { get; set; }
    }
}
