namespace proveit.DTO
{
    public class DetalhesReceitaDTO
    {
        public ReceitaGeralDTO Receita { get; set; }
        public List<AvaliacaoDTO> Avaliacoes { get; set; }
        public double MediaEstrelas { get; set; }
    }
}
