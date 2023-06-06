using System.Reflection.Metadata;

namespace proveit.DTO
{
    public class UsuarioDTO
    {
        public int idUsuario { get; set; }
        public string? Nome { get; set; }
        public string? NomeTag { get; set; }
        public string? Email { get; set;}
        public string? Senha { get; set; }
        public string? Foto { get; set; }
    }
}
