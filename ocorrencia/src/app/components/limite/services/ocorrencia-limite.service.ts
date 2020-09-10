import { Injectable } from '@angular/core';
import { MatSnackBar  } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../models/ocorrencia.model'

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaLimiteService {

  baseURL = "http://localhost:3001/ocorrencias"


  constructor(private snackBar : MatSnackBar,
              private http: HttpClient ) { }


  showMessage(msg:string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })

  }

  
  getOcorrencias(): Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(this.baseURL)
  }

}
