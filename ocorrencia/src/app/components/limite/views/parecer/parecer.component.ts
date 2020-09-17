import { Component, OnInit , Input} from '@angular/core';
import { Ocorrencia } from '../../models/ocorrencia.model';



@Component({
  selector: 'app-parecer',
  templateUrl: './parecer.component.html',
  styleUrls: ['./parecer.component.css']
})
export class ParecerComponent implements OnInit {

  @Input() ocorrencia: Ocorrencia;
  

  constructor() { }

  dataPrazo : Date
  tipoSelected = '';
  parecer = 'h!';
  
  ngOnInit(): void {
    this.dataPrazo =  new Date(this.ocorrencia.prazo)
  }

  tipos: string[] = ['REGISTRO_OCORRENCIA', 'REGISTRO_ALCADA', 'REGISTRO_CONTIGENCIA'];


}
