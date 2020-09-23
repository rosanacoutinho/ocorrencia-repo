import { Component, OnInit , Input} from '@angular/core';
import { Ocorrencia } from '../../models/ocorrencia.model';

import { WeekDay } from '@angular/common';
import { MAT_DATE_FORMATS, MatDateFormats , DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Moment } from 'moment';
import { MyDateAdapter } from '../my-date-adapter';

const DATE_FORMAT: MatDateFormats = {
	parse: {
		dateInput: ['l', 'LL', 'DD/MM/YYYY']
	},
	display: {
		dateInput: 'DD/MM/YYYY',
		monthYearLabel: 'YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY'
	}
}


@Component({
  selector: 'app-parecer',
  templateUrl: './parecer.component.html',
  styleUrls: ['./parecer.component.css'],
  providers: [
		{ provide: DateAdapter, useClass: MyDateAdapter, deps: [MAT_DATE_LOCALE] },
		{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
		{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
	]
})
export class ParecerComponent implements OnInit {

  @Input() ocorrencia: Ocorrencia;
  

  constructor() { }

  tipoSelected = '';
  parecer = '';
  
  dateFilter = (dataMovimento: Moment) => (dataMovimento.weekday() != WeekDay.Sunday) && (dataMovimento.weekday() != WeekDay.Saturday)

  ngOnInit(): void {
  }

  tipos: string[] = ['REGISTRO_OCORRENCIA', 'REGISTRO_ALCADA', 'REGISTRO_CONTINGENCIA'];


}
