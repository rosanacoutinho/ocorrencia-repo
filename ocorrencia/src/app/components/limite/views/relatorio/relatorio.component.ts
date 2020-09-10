import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  constructor( private ocorrenciaLimiteService: OcorrenciaLimiteService, 
                private router: Router ) {}
  
  title = 'ocorrencia';

ocorrencias: Ocorrencia[] 

/** metodo chamado pelo botao de consulta */
consultar(){  
  this.ocorrencias = [];
   this.ocorrenciaLimiteService.showMessage('carregando tabela');
   this.getOcorrencias()
}

/*Metodo aciona servicco para buscar ocorrencias via http*/ 
getOcorrencias(){
  this.ocorrenciaLimiteService.getOcorrencias().subscribe( ocorrencias => {
    this.ocorrencias= ocorrencias
    console.log(ocorrencias)
  })
}

 /*Metodo navega para a tela de tratamento de ocorrencia*/ 
tratarOcorrencia(){
  this.router.navigate(['limite/tratamento'])
}

/*opcoes da dataTable*/ 
dtOptions: any = {};

ngOnInit(){

 

  /*opcoes da dataTable*/ 
  this.dtOptions = {
     pagingType: 'full_numbers',
      pageLength: 20,
      dom: 'Bfrtip',
      buttons: [
        'excel',
        //'print', 
        'copy',
        'csv'
        //'colvis'
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
