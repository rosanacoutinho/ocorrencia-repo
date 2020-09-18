import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { RelatorioComponent } from './components/limite/views/relatorio/relatorio.component';
import { TratamentoComponent } from './components/limite/views/tratamento/tratamento.component';
import { AcompanhamentoComponent } from './components/limite/views/acompanhamento/acompanhamento.component'; 
import { DetalhamentoComponent } from './components/limite/views/detalhamento/detalhamento.component'
import { ParecerComponent } from './components/limite/views/parecer/parecer.component';
import { VisualizacaoComponent } from './components/limite/views/visualizacao/visualizacao.component'; 


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogVinculacaoComponent } from './components/limite/views/dialog-vinculacao/dialog-vinculacao.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RelatorioComponent,
    TratamentoComponent,
    AcompanhamentoComponent,
    DetalhamentoComponent,
    ParecerComponent,
    VisualizacaoComponent,
    DialogVinculacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule ,
    MatSelectModule ,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule ,
    MatFormFieldModule,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
