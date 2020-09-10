import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent implements OnInit {

  
  ocorrencia = {
    "id": 18750  ,
    "dataMovimento": "02/09/2020",
    "fundo": "BB TOP ARBITRAG_FR",
    "divisao": "fundos Multimercados",
    "drive": 101,
    "tipolimite": "PERDA_MAXIMA",
    "estado" : "",
    "alcada" : "EXECUTIVO_GESTAO",
    "abertaEm": "03/08/2020",
    "prazo" : "10/09/2020", 
    "classificacao": "INTERNO",
    "consumo": 1.220720036406450,
    "pl": 681011390.96 ,
    "limite" : 0.02,
    "perda" : -11534497.619812250137329 , 
    "perdaPercentual" : -1.3183 ,
    "Retorno" : 0.002839450730577 , 
    "perdaMaxima": -0.004414400728129,
    "periodo" : 21
    
  }

  constructor(private ocorrenciaLimiteService: OcorrenciaLimiteService, 
              private router: Router) { }

  voltar(){
    this.router.navigate(['/limite/acompanhamento'])
  }

  ngOnInit(): void {
  }

}
