﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;

namespace proveit.DTO
{
    public class ReceitaGeralDTO
    {
        public int idReceita { get; set; }
        public string NomeReceita { get; set; }
        public int TempoPreparo { get; set; }
        public string Tempo { get; set; } 
        public int Porcoes { get; set; }
        public int ValCalorico { get; set; }
        public string Descricao { get; set; }
        public string NomeTag { get; set; }
        public int Usuario_id { get; set; }
        public int Categoria_id { get; set; }
        public bool Aproveitamento { get; set; }
        public int mediaEstrelas { get; set; }
        public List<FotoReceitaDTO> Fotos { get; set; }
        public List<PassoDTO> Passos { get; set; }
        public List<Ingredientes_ReceitaDTO> Ingredientes { get; set; }
        public List<AvaliacaoDTO> Avaliacoes { get; set; }
    }
}
