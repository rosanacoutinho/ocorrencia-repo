import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  idOcorrenciaPrincipal: number;
}

@Component({
  selector: 'app-dialog-vinculacao',
  templateUrl: './dialog-vinculacao.component.html',
  styleUrls: ['./dialog-vinculacao.component.css']
})
export class DialogVinculacaoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogVinculacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  vincularOcorrencia(){
    
  }

  ngOnInit(): void {
  }

}
