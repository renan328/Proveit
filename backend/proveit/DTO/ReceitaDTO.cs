using System.Reflection.Metadata;

namespace proveit.DTO
{
    public class ReceitaDTO
    {
        public int idReceita { get; set; }
        public string Nome { get; set;}
        public int TempoPreparo { get; set; }
        public int Porcoes { get; set; }
        public string ValCalorico { get; set; }
        public string Descricao { get; set; }
        public int Usuario_id { get; set; }
        public string UsuarioNomeTag { get; set; }
        public int Categoria_id { get; set; }
        public bool Aproveitamento { get; set; }

        // public Blob Foto { get; set; }
    }
}
