import { Component, OnInit, Input} from '@angular/core';
import { Ocorrencia } from '../../models/ocorrencia.model';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {

  
  @Input() ocorrencia: Ocorrencia;
  
  constructor() { }

  ngOnInit(): void {
  }


}
