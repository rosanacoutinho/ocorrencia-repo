import { OcorrenciaLimiteService } from '../../services/ocorrencia-limite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmacaoComponent } from '../dialog-confirmacao/dialog-confirmacao.component';

import { DataService } from "../../services/data.service";



@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent implements OnInit {

  title = 'Detalhamento de ocorrência'
  ocorrencia : Ocorrencia 
  ocorrencias: Ocorrencia[] 

  alcadaUser = 'RISCO' //SO PODERA REINICIAR UMA OCORRENCIA O PESSOA DA RISCO

  constructor(private ocorrenciaLimiteService: OcorrenciaLimiteService, 
              private router: Router,
              private data: DataService,
              public dialog: MatDialog) { }
  
 
  openDialog() {
                const dialogRef = this.dialog.open( DialogConfirmacaoComponent, {
                  data: { titulo:'Reiniciar Ocorrencia', 
                          pergunta:'Tem certeza que deseja reiniciar?',
                          explicacao: 'Todos os pareceres e despachos dados para esta ocorrencia serao invalidados.'}
                });
            
                dialogRef.afterClosed().subscribe(result => {
                  console.log(`Dialog result: ${result}`);
                  if (result){
                    this.reiniciar()
                  }
                });
              }

  voltar(){
    this.router.navigate(["/limite/acompanhamento"]);
    this.data.upDateData(this.ocorrencias);
  }

  reiniciar(){
    console.log('reiniciando ocorrencia')
  }

  ngOnInit(): void {  
    this.ocorrencia =  this.data.ocorrencia  ;
    this.ocorrencias =  this.data.ocorrencias;
  }

}
