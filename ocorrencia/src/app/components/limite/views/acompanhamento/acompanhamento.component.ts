
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';


import { WeekDay } from '@angular/common';
import { MAT_DATE_FORMATS, MatDateFormats , DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Moment } from 'moment';
import { MyDateAdapter } from '../my-date-adapter';
import { Subject } from 'rxjs';

import { DataService } from "../../services/data.service";


const DATE_FORMAT: MatDateFormats = {
	parse: {
		dateInput: ['l', 'LL', 'DD/MM/YYYY']
	},
	display: {
		dateInput: 'DD/MM/YYYY',
		monthYearLabel: 'YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY'
	}
}


@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css'],
  providers: [
		{ provide: DateAdapter, useClass: MyDateAdapter, deps: [MAT_DATE_LOCALE] },
		{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
		{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
	]
})
export class AcompanhamentoComponent implements OnInit {

  title = 'Acompanhamento de extrapolações de Limite de Fundos'; 
  dataInicio : string
  dataFim : string
  ocorrencias: Ocorrencia[]

  dtTrigger: Subject<any> = new Subject();

  dateFilter = (dataMovimento: Moment) => (dataMovimento.weekday() != WeekDay.Sunday) && (dataMovimento.weekday() != WeekDay.Saturday)

  constructor(private ocorrenciaLimiteService: OcorrenciaLimiteService, 
              private router: Router,
              private route: ActivatedRoute,
              private data: DataService) { }




buscar(){  
  let dataInicio = this.dataInicio
  let dataFim = this.dataFim
  this.ocorrenciaLimiteService.getOcorrenciasPeriodo(dataInicio,dataFim).subscribe( ocorrencias => { 
    this.ocorrencias = ocorrencias;
  })
}

getDadosTabela(dataInicio: string , dataFim: string ){
  this.ocorrenciaLimiteService.getOcorrenciasPeriodo('2020-01-01','2020-04-01').subscribe( ocorrencias => {     
    this.ocorrencias = ocorrencias;       
    this.dtTrigger.next(); //renderiza tabela
})
}


detalharOcorrencia(ocorrencia: Ocorrencia){  
  this.data.setData(ocorrencia, this.ocorrencias);
  this.router.navigate(['/limite/detalhamento']) 
}


dtOptions: any = {};
  
  
  ngOnInit(): void {

    
  /*opcoes da dataTable*/ 
  this.dtOptions = {
    pagingType: 'full_numbers',
     pageLength: 20,
     dom: 'Bfrtip',
     ordering: true,
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
    //  ,drawCallback(setting) {
    //     console.log("setting is  ", setting)
    //     var api = this.api();
    //     var rows = api.rows({ page: 'current' }).nodes();
    //     console.log("rows is ", rows);
    //     var last = null;
    //     const columIndex = 7;
    //     api.column(columIndex, { page: 'current' }).data().each(function (group, i) {
    //       if (last !== group) {
    //         $(rows).eq(i).before(
    //           '<tr style="color: grey !important;background-color: GhostWhite; height:10px!important ;" class="groupColumns"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td style="width: 300px !important;">' + group + '</td><td></td><td></td><td></td><td></td></tr>'
    //         );
    //         last = group;
    //       }
    //     });
    //   }
     
   
   };

 
  this.getDadosTabela('bla' , 'bla' )
   
}


ngOnDestroy(): void {
  //to unsubscribe the event
  this.dtTrigger.unsubscribe();
}

}
