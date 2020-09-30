import { Component, OnInit, ViewChild, Inject, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
import { ParecerComponent } from '../parecer/parecer.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogVinculacaoComponent } from '../dialog-vinculacao/dialog-vinculacao.component'
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { DialogConfirmacaoComponent } from '../dialog-confirmacao/dialog-confirmacao.component';
import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-tratamento',
  templateUrl: './tratamento.component.html',
  styleUrls: ['./tratamento.component.css']
})
export class TratamentoComponent implements OnInit {


  @ViewChild(ParecerComponent) parecerComponent;


  constructor( private router: Router,
                public dialog: MatDialog,
                private ocorrenciaLimiteService: OcorrenciaLimiteService,
                private data: DataService ) { }

          
  title = 'Tratamento de Ocorrência'

  ocorrencia : Ocorrencia 
  ocorrencias: Ocorrencia[] 
  parecer: string  
  tipoSelected = '';
  idOcorrenciaPrincipal: number;/**id da Ocorrencia vinculavel */


  openDialogVinculacao(): void {
    const dialogRef = this.dialog.open(DialogVinculacaoComponent, {
      width: '250px',
      data: { idOcorrenciaPrincipal: this.idOcorrenciaPrincipal}
    });

    dialogRef.afterClosed().subscribe(result => {      
      if (result != false && result != null ){
        this.vincular(result);

      }     
    });
  }

  openDialogConfirmacao() {
    this.parecer = this.parecerComponent.parecer
    if (this.parecer == '')
      alert('Por favor, insira um parecer')
    else {
      const dialogRef = this.dialog.open( DialogConfirmacaoComponent, {
        data: { titulo:'Ocultar Ocorrencia', 
                pergunta:'Confirma?',
                explicacao: 'Voce considera esta ocorrencia indevida, pois foi gerada a partir de um processamento incorreto'}
      });
      dialogRef.afterClosed().subscribe(confirmado => {
        console.log(`Dialog result: ${confirmado}`);
        if (confirmado){
          this.ocultar()
        }
      });

    }
  }

  voltar(){
    this.router.navigate(["limite"]);
    this.data.upDateData(this.ocorrencias);
  }

  salvar(){
    this.parecer = this.parecerComponent.parecer
    if (this.parecer == '')
      alert('Por favor, insira um parecer')
    else {
      console.log('salvando ocorrencia' )
      console.log(this.ocorrencia )
    }
  }

  ocultar(){
    console.log('ocultando ocorrencia' )
    console.log(this.ocorrencia )
  }

  vincular(result){
    console.log(`Vinculando a ocorrencia: ${result}`);
    console.log(this.ocorrencia  )
  }

  ngOnInit(): void {      
    this.ocorrencia =  this.data.ocorrencia  ;
    this.ocorrencias =  this.data.ocorrencias;
    
  }



}




