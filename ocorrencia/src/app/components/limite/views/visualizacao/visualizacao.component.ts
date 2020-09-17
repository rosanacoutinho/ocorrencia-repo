import { Component, OnInit, Input} from '@angular/core';
import { Ocorrencia } from '../../models/ocorrencia.model';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {

  
  @Input() ocorrencia: Ocorrencia;
  
  constructor() { }

  ngOnInit(): void {
  }


  // ocorrencia =  {
  //   "id": 18750  ,
  //   "dataMovimento": "02/09/2020",
  //   "fundo": "BB TOP ARBITRAG_FR",
  //   "divisao": "fundos Multimercados",
  //   "drive": 101,
  //   "tipolimite": "PERDA_MAXIMA",
  //   "estado" : "",
  //   "alcada" : "EXECUTIVO_GESTAO",
  //   "abertaEm": "03/08/2020",
  //   "prazo" : "10/09/2020", 
  //   "classificacao": "INTERNO",
  //   "consumo": 1.220720036406450,
  //   "pl": 681011390.96 ,
  //   "limite" : 0.02,
  //   "perda" : -11534497.619812250137329 , 
  //   "perdaPercentual" : -1.3183 ,
  //   "retorno" : 0.002839450730577 , 
  //   "perdaMaxima": -0.004414400728129,
  //   "periodo" : 21
    
  // }
}
