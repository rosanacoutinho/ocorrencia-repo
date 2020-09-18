import { Component, OnInit } from '@angular/core';
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  title = 'Extrapolações de Limite de Fundos';
  
  constructor( private ocorrenciaLimiteService: OcorrenciaLimiteService, 
               private router: Router,
               private route: ActivatedRoute ) {}
  
  

ocorrencias: Ocorrencia[] 



/*Metodo aciona servico para buscar ocorrencias via http*/ 
getOcorrencias(){
  this.ocorrenciaLimiteService.getOcorrencias().subscribe( ocorrencias => {
    this.ocorrencias = ocorrencias
  })
}

/*ir para pagina de tratamento*/ 
tratarOcorrencia(ocorrencia: Ocorrencia){
  let ocorrenciaJson = JSON.stringify({ ocorrencia });
  let ocorrenciasJson = JSON.stringify( this.ocorrencias );
  this.router.navigate(['limite/tratamento', {o : ocorrenciaJson, os : ocorrenciasJson }] ); 
}


/*opcoes da dataTable*/ 
dtOptions: any = [];

ngOnInit(){

  this.ocorrencias = JSON.parse( this.route.snapshot.paramMap.get('os') )
  if (this.ocorrencias == null) { //se primeiro acesso..
    this.getOcorrencias()
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
