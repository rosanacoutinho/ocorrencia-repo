import { Component, OnInit, ViewChild, Inject, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
import { ParecerComponent } from '../parecer/parecer.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogVinculacaoComponent } from '../dialog-vinculacao/dialog-vinculacao.component'
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';

import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-tratamento',
  templateUrl: './tratamento.component.html',
  styleUrls: ['./tratamento.component.css']
})
export class TratamentoComponent implements OnInit {


  @ViewChild(ParecerComponent) parecerComponent;


  constructor( private router: Router,
                private route: ActivatedRoute,
                public dialog: MatDialog,
                private ocorrenciaLimiteService: OcorrenciaLimiteService,
                private data: DataService ) { }

          
  title = 'Tratamento de Ocorrência'

  ocorrencia : Ocorrencia 
  ocorrencias: Ocorrencia[] 
  
  parecer: string  
  tipoSelected = '';
  idOcorrenciaPrincipal: number;/**id da Ocorrencia vinculavel */

  message:string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogVinculacaoComponent, {
      width: '250px',
      data: { idOcorrenciaPrincipal: this.idOcorrenciaPrincipal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O dialog de vinculacao foi fechado');
      this.idOcorrenciaPrincipal = result;
    });
  }


  voltar(){
    this.router.navigate(["limite"]);
    this.data.upDateData(this.ocorrencias);
  }

  salvar(){
    this.parecer = this.parecerComponent.parecer
    if (this.parecer == '')
      alert('parecer nao pode ser vazio')
  }

  ocultarOcorrencia(){
    this.parecer = this.parecerComponent.parecer
    if (this.parecer == '')
      alert('parecer nao pode ser vazio')
  //chamara o metodo de invalidar ocorrencia do back end enviando o parecer dado pelo acessor
  }

  sub: any;

  ngOnInit(): void {      
 
    this.ocorrencia =  this.data.ocorrencia  ;
    this.ocorrencias =  this.data.ocorrencias;
    
  }



}




