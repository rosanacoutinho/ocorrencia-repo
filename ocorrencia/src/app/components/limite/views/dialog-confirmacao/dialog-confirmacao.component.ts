import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  titulo: string;
  pergunta: string;
  explicacao: string ;
}

@Component({
  selector: 'app-dialog-confirmacao',
  templateUrl: './dialog-confirmacao.component.html',
  styleUrls: ['./dialog-confirmacao.component.css']
})
export class DialogConfirmacaoComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DialogConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  titulo : string 
  pergunta: string  
  explicacao: string  

  ngOnInit(): void {
    this.titulo = this.data.titulo
    this.pergunta = this.data.pergunta
    this.explicacao = this.data.explicacao
  }

}
