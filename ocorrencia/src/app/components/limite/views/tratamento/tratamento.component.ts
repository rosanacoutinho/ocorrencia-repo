import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
import { ParecerComponent } from '../parecer/parecer.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogVinculacaoComponent } from '../dialog-vinculacao/dialog-vinculacao.component'
import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';


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
                private ocorrenciaLimiteService: OcorrenciaLimiteService) { }

          
  title = 'Tratamento de Ocorrência'

  ocorrencia : Ocorrencia 
  ocorrencias: Ocorrencia[] 
  
  parecer: string  
  tipoSelected = '';
  idOcorrenciaPrincipal: number;/**id da Ocorrencia vinculavel */


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
    let ocorrenciasJson = JSON.stringify( this.ocorrencias );
    this.router.navigate(['limite', { os : ocorrenciasJson }]) 
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


  ngOnInit(): void {      
    this.ocorrencias = JSON.parse( this.route.snapshot.paramMap.get('os') )
    let object =  JSON.parse( this.route.snapshot.paramMap.get('o') )  
    this.ocorrencia = object.ocorrencia 
  }



}




