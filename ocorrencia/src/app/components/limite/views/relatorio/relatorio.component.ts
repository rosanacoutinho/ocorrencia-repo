import { Component, OnDestroy, OnInit } from '@angular/core';
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
import { Autor } from '../../models/autor.model';
import { Subject } from 'rxjs';
import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  
  constructor( private ocorrenciaLimiteService: OcorrenciaLimiteService, 
               private router: Router,
               private route: ActivatedRoute ,
               private data: DataService ) {}
  
  
title = 'Extrapolações de Limite de Fundos';
ocorrencias: Ocorrencia[] = []
dtTrigger: Subject<any> = new Subject();

message:string;

autor: Autor =  {
            "matricula": "F8783477",
            "nome": "ROSANA DE PAULA COUTINHO BARROS",
            "alcada": "RISCO",
            "autorizacaoDespacho": 0
         } //get essa informacao de algum jeito q eu ainda nao sei como rs
alcadaUser = this.autor.alcada 
dtOptions: any = [];/*opcoes da dataTable*/ 




/*Metodo aciona servico para buscar ocorrencias via http*/ 
getDadosTabela(alcadaUser : string){
  this.ocorrenciaLimiteService.getOcorrencias().subscribe( ocorrencias => {     
      this.ocorrencias = ocorrencias;       
      this.dtTrigger.next(); //renderiza tabela
  })
}


/*ir para pagina de tratamento*/ 
tratarOcorrencia(ocorrencia: Ocorrencia) {
  this.router.navigate(["limite/tratamento"]);
  this.data.setData(ocorrencia, this.ocorrencias);
}

invalidar(ocorrencia: Ocorrencia){  
  
}

liberar(ocorrencia: Ocorrencia){
  
}

 




ngOnInit(){

 
  
  /*opcoes da dataTable*/ 
  this.dtOptions = {
    pagingType: 'full_numbers',
      pageLength: 100,
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
      },
      rowCallback: function( row, data, index ) {
        var dataPrazo = data[10];
        var prazoOcorrencia = new Date(dataPrazo);    
        var dataAtencao = new Date(dataPrazo).setDate(prazoOcorrencia.getDate()-2);   
        var dataAtencaoDate = new Date(dataAtencao)
        var dataHoje = new Date();      
        var vencendo = (dataHoje >= dataAtencaoDate) && (dataHoje <= prazoOcorrencia);      
        var vencida = dataHoje > prazoOcorrencia;
        
        if ( vencida ) { $('td', row).css('color', 'red');}
        else if ( vencendo ) {$('td', row).css('color', 'Orange');}
    }
  }; 
    

 

  

    this.getDadosTabela(this.alcadaUser)
    

  

  }

  


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



}
