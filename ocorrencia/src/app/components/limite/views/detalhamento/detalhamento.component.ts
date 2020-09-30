import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';

import { DataService } from "../../services/data.service";



@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent implements OnInit {

  title = 'Detalhamento de ocorrência'
  ocorrencia : Ocorrencia 
  ocorrencias: Ocorrencia[] 

  alcadaUser = 'RISCO' //SO PODERA REINICIAR UMA OCORRENCIA O PESSOA DA RISCO

  constructor(private ocorrenciaLimiteService: OcorrenciaLimiteService, 
              private router: Router,
              private data: DataService) { }


  voltar(){
    this.router.navigate(["/limite/acompanhamento"]);
    this.data.upDateData(this.ocorrencias);
  }

  reiniciar(){
    
  }

  ngOnInit(): void {  
    this.ocorrencia =  this.data.ocorrencia  ;
    this.ocorrencias =  this.data.ocorrencias;
  }

}
