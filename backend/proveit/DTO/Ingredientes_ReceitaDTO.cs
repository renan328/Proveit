using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proveit.DTO
{
    public class Ingredientes_ReceitaDTO
    {
        public int idIngredientesReceita { get; set; }
        public int Quantidade { get; set; }
        public string Medida { get; set; }
        public int Receita_id { get; set; }
        public int Ingredientes_id { get; set; }
    }
}
