namespace proveit.DTO
{
    public class ReceitaGeralDTO
    {
        //Receita
        public string NomeReceita { get; set; }
        public int TempoPreparo { get; set; }
        public int Porcoes { get; set; }
        public int ValCalorico { get; set; }
        public string Descricao { get; set; }
        //usuario 
        public string NomeTag { get; set; }
        public bool Aproveitamento { get; set; }
        //Passos
        public List<string> PassoTexto { get; set; }
        public List<int> NumPasso { get; set; }
        // Ingredientes
        public List<string> NomeIngrediente { get; set; }
        public List<int> Quantidade { get; set; }
        public List<string> Medida { get; set; }
    }
}
