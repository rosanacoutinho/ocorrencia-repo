import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../models/ocorrencia.model'

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaLimiteService {

  baseURL = "http://localhost:3001/ocorrencias"


  constructor(private http: HttpClient ) { }




  
  getOcorrencias(): Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(this.baseURL)
  }

  getOcorrenciasPeriodo(dataInicio: string, dataFim: string){
    return this.http.get<Ocorrencia[]>(this.baseURL)
  }

  salvar(ocorrencia: Ocorrencia) : Observable<Ocorrencia> {
    return this.http.post<Ocorrencia>(this.baseURL, ocorrencia)
  }

  invalidar(ocorrencia: Ocorrencia) : Observable<Ocorrencia> {
    return this.http.post<Ocorrencia>(this.baseURL, ocorrencia)
  }

  vincular(ocorrencia: Ocorrencia, ) : Observable<Ocorrencia> {
    return this.http.post<Ocorrencia>(this.baseURL, ocorrencia)
  }

  liberar(ocorrencia: Ocorrencia) : Observable<Ocorrencia> {
    return this.http.post<Ocorrencia>(this.baseURL, ocorrencia)
  }

  reiniciar(ocorrencia: Ocorrencia) : Observable<Ocorrencia> {
    return this.http.post<Ocorrencia>(this.baseURL, ocorrencia)
  }

}
