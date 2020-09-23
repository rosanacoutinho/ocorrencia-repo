import { Component, OnDestroy, OnInit } from '@angular/core';
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
import { Autor } from '../../models/autor.model';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  
  constructor( private ocorrenciaLimiteService: OcorrenciaLimiteService, 
               private router: Router,
               private route: ActivatedRoute ) {}
  
  
title = 'Extrapolações de Limite de Fundos';
ocorrencias: Ocorrencia[] 
autor: Autor =  {
            "matricula": "F8783477",
            "nome": "ROSANA DE PAULA COUTINHO BARROS",
            "alcada": "RISCO",
            "autorizacaoDespacho": 0
         } //get essa informacao de algum jeito q eu ainda nao sei como rs
alcadaUser = this.autor.alcada 
dtOptions: any = [];/*opcoes da dataTable*/ 


/*Metodo aciona servico para buscar ocorrencias via http*/ 
getOcorrencias(alcadaUser : string){
  this.ocorrenciaLimiteService.getOcorrencias().subscribe( ocorrencias => { 
    setTimeout(() => this.ocorrencias = ocorrencias, 1000);  

  })
}

/*ir para pagina de tratamento*/ 
tratarOcorrencia(ocorrencia: Ocorrencia) {
  let ocorrenciaJson = JSON.stringify({ ocorrencia });
  let ocorrenciasJson = JSON.stringify( this.ocorrencias );
  this.router.navigate(['limite/tratamento', {o : ocorrenciaJson, os : ocorrenciasJson }] ); 
}

invalidar(ocorrencia: Ocorrencia){  
  //chamara o metodo de invalidar ocorrencia do back end enviando um parecer padrao da infor
  // 'Ocorrencia gerada por erro de sessao do RiskWatch'
  alert(ocorrencia.id)
}

liberar(ocorrencia: Ocorrencia){
  alert(ocorrencia.id)
}

ngOnInit(){
  this.ocorrencias = JSON.parse( this.route.snapshot.paramMap.get('os') )
  if (this.ocorrencias == null) { //se primeiro acesso..
    this.getOcorrencias(this.alcadaUser)
  }
  /*opcoes da dataTable*/ 
  this.dtOptions = {
    pagingType: 'full_numbers',
      pageLength: 20,
      dom: 'Bfrtip',
      buttons: [
        'excel', 
        'copy',
        'csv'
      ],
      language: {
        emptyTable: "Nenhum registro encontrado",
        info: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando 0 até 0 de 0 registros",
        infoFiltered: "(Filtrados de _MAX_ registros)",
        infoPostFix: "",
        lengthMenu: "_MENU_ resultados por página",
        loadingRecords: "Carregando...",
        processing: "Processando...",
        zeroRecords: "Nenhum registro encontrado",
        search: "Pesquisar",
        paginate: {
          next: "Próximo",
          previous: "Anterior",
          first: "Primeiro",
          last: "Último"
        }
      }
    };  
  }


}
