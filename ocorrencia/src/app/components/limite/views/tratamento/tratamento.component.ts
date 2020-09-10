import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratamento',
  templateUrl: './tratamento.component.html',
  styleUrls: ['./tratamento.component.css']
})
export class TratamentoComponent implements OnInit {

  constructor( private router: Router ) { }

  ocorrencia = {
    "id": 18682  ,
    "dataMovimento": "02/09/2020",
    "fundo": "BRPREV TOP CAMBIALFI ",
    "divisao": "fundos Multimercados",
    "drive": 6229,
    "tipolimite": "TRACKING_ERROR ",
    "estado" : "",
    "alcada" : "EXECUTIVO_GESTAO",
    "abertaEm": "03/08/2020",
    "prazo" : "10/09/2020", 
    "classificacao": "CLIENTE",
    "consumo": 	4.0017,
    "pl": 314892235.21 ,
    "limite" : 0.4,
    "trackingError" : 0.0019
  }

  voltar(){
    this.router.navigate(['limite'])
  }

  ngOnInit(): void {
  }

}
