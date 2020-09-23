import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
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
              private route: ActivatedRoute) { }


  voltar(){
    let ocorrenciasJson = JSON.stringify( this.ocorrencias );
    this.router.navigate(['/limite/acompanhamento', { os : ocorrenciasJson }])
  }

  reiniciar(){
    alert('Confirma?')
  }

  ngOnInit(): void {
    let object =  JSON.parse( this.route.snapshot.paramMap.get('o') )
    this.ocorrencias = JSON.parse( this.route.snapshot.paramMap.get('os') )
    this.ocorrencia = object.ocorrencia
  }

}
