using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proveit.DTO
{
    public class PassoDTO
    {
        public int idPasso { get; set; }
        public int Receita_id { get; set; }
        public int NumPasso { get; set; }
        public string PassoTexto { get; set; }
    }
}
