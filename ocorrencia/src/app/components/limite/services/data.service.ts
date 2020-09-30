import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ocorrencia } from '../models/ocorrencia.model'


@Injectable()
export class DataService {

  
  ocorrencia : Ocorrencia;
  ocorrencias: Ocorrencia[];

  constructor() { }

  setData(ocorrencia: Ocorrencia, ocorrencias: Ocorrencia[] ) {
    this.ocorrencia = ocorrencia;
    this.ocorrencias = ocorrencias;
  }

  upDateData( ocorrencias: Ocorrencia[] ) {
    this.ocorrencias = ocorrencias;
  }

}