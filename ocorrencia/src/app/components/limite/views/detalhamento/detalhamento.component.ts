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

  title = 'Detalhamento Ocorrencia'
  ocorrencia : Ocorrencia 
  ocorrencias: Ocorrencia[] 

  // registros = this.ocorrencia.registros
  registros = [
          {
            "id": 345464 ,
          "dataRegistro": "2020-01-01 00:00:00",
          "alcada": "RISCO",
          "parecer": "porque sim",
          "autor": {
                          "matricula": "F00000",
                          "nome": "SISTEMA",
                          "alcada": "SISTEMA",
                          "autorizacaoDespacho": 1
                          }
          },
          {
            "id": 345465,
          "dataRegistro": "2020-01-01 00:00:00" ,
          "alcada": "RISCO",
          "parecer": "Fundo extrapolado devido grande volude de merda que deu",
          "autor": {
                          "matricula": "F00000",
                          "nome": "SISTEMA",
                          "alcada": "SISTEMA",
                          "autorizacaoDespacho": 1
                          }
          },
          {
            "id": 345470,
          "dataRegistro": "2020-01-025 00:00:00" ,
          "alcada": "GESTAO",
          "parecer": "De acordo",
          "autor": {
                          "matricula": "F00000",
                          "nome": "SISTEMA",
                          "alcada": "SISTEMA",
                          "autorizacaoDespacho": 1
                          }
          }
        ]




  constructor(private ocorrenciaLimiteService: OcorrenciaLimiteService, 
              private router: Router,
              private route: ActivatedRoute) { }


  voltar(){
    let ocorrenciasJson = JSON.stringify( this.ocorrencias );
    this.router.navigate(['/limite/acompanhamento', { os : ocorrenciasJson }])
  }

  ngOnInit(): void {
    let object =  JSON.parse( this.route.snapshot.paramMap.get('o') )
    this.ocorrencias = JSON.parse( this.route.snapshot.paramMap.get('os') )
    this.ocorrencia = object.ocorrencia
  }

}
