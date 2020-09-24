import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input} from '@angular/core';
import { Ocorrencia } from '../../models/ocorrencia.model';


 /*
 * CornflowerBlue  (azul) - registro alcada
 * DarkGray  (cinza)  - indevidas 
 * DarkSalmon (vermelho) - registro contingencia 
 * Khaki  (amarelo) - registro ocorrencia
*/
@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {

  
  @Input() ocorrencia: Ocorrencia;

  cor:string = 'transparent'
  classificacao:string 


  constructor() { }

  panelOpenState = true;

  ngOnInit(): void {

   this.classificacao = this.ocorrencia.classificacao

  if (this.classificacao == 'REGISTRO_ALCADA')
    this.cor = "CornflowerBlue" 
  else if (this.classificacao == 'REGISTRO_CONTINGENCIA')
    this.cor = "DarkSalmon"
  else if  (this.classificacao == 'REGISTRO_OCORRENCIA')
    this.cor = "Khaki"
  else if  (this.classificacao == 'INDEVIDA')
   this.cor = "DarkGray"
  else 
    this.cor = "GhostWhite"
  
  }


}


