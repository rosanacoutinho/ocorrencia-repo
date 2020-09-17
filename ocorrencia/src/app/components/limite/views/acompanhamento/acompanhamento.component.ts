
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';


@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css']
})
export class AcompanhamentoComponent implements OnInit {

  title = 'Acompanhamento de extrapolações de Limite de Fundos';
  
  dataInicio : string
  dataFim : string

  ocorrencias: Ocorrencia[]

  constructor(private ocorrenciaLimiteService: OcorrenciaLimiteService, 
              private router: Router,
              private route: ActivatedRoute) { }




buscar(){  
  console.log(this.dataInicio)
  console.log(this.dataFim)
  let dataInicio = this.dataInicio
  let dataFim = this.dataFim
  this.ocorrencias = [];
  //this.ocorrenciaLimiteService.showMessage('carregando tabela');
  this.getOcorrenciasPeriodo(dataInicio, dataFim)
}

detalharOcorrencia(ocorrencia: Ocorrencia){  
  let ocorrenciaJson = JSON.stringify({ ocorrencia });
  let ocorrenciasJson = JSON.stringify( this.ocorrencias );
  this.router.navigate(['/limite/detalhamento', {o : ocorrenciaJson, os : ocorrenciasJson }]) 
}


getOcorrenciasPeriodo(dataInicio, dataFim){
  this.ocorrenciaLimiteService.getOcorrencias().subscribe( ocorrencias => {
    this.ocorrencias= ocorrencias
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

 
    this.ocorrencias = JSON.parse( this.route.snapshot.paramMap.get('os') )
   
   
}


}
