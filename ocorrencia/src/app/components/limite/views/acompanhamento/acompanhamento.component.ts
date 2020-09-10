
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';


@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css']
})
export class AcompanhamentoComponent implements OnInit {

  ocorrencias: Ocorrencia[]

  constructor(private ocorrenciaLimiteService: OcorrenciaLimiteService, 
              private router: Router) { }



buscar(){  
  this.ocorrencias = [];
  this.ocorrenciaLimiteService.showMessage('carregando tabela');
  this.getOcorrencias()
}

detalharOcorrencia(){
  this.router.navigate(['/limite/detalhamento'])
}

  /*Metodo aciona servicco para buscar ocorrencias via http*/ 
getOcorrencias(){
  this.ocorrenciaLimiteService.getOcorrencias().subscribe( ocorrencias => {
    this.ocorrencias= ocorrencias
    console.log(ocorrencias)
  })
}

/*opcoes da dataTable*/ 
dtOptions: any = {};

  ngOnInit(): void {
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
