import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ocorrencia } from '../../models/ocorrencia.model';
import { ParecerComponent } from '../parecer/parecer.component'



@Component({
  selector: 'app-tratamento',
  templateUrl: './tratamento.component.html',
  styleUrls: ['./tratamento.component.css']
})
export class TratamentoComponent implements OnInit {


  @ViewChild(ParecerComponent) parecerComponent;


  constructor( private router: Router,
                private route: ActivatedRoute ) { }

          
  title = 'Tratamento de Ocorrencia'

  ocorrencia : Ocorrencia 
  ocorrencias: Ocorrencia[] 
  parecer: string = 'blablabla'
  dataPrazo : any 
  tipoSelected = '';


 

  voltar(){
    let ocorrenciasJson = JSON.stringify( this.ocorrencias );
    this.router.navigate(['limite', { os : ocorrenciasJson }])
  }

  salvar(){
    alert(this.parecer)
  }

  ngAfterViewInit() {
    this.parecer = this.parecerComponent.parecer
  }

  ngOnInit(): void {      
  let object =  JSON.parse( this.route.snapshot.paramMap.get('o') )
  this.ocorrencias = JSON.parse( this.route.snapshot.paramMap.get('os') )
  this.ocorrencia = object.ocorrencia
  this.dataPrazo =  new Date(this.ocorrencia.prazo)

  }

}
