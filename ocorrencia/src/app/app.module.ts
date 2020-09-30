import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

/** Meus componentes  */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { RelatorioComponent } from './components/limite/views/relatorio/relatorio.component';
import { TratamentoComponent } from './components/limite/views/tratamento/tratamento.component';
import { AcompanhamentoComponent } from './components/limite/views/acompanhamento/acompanhamento.component'; 
import { DetalhamentoComponent } from './components/limite/views/detalhamento/detalhamento.component'
import { ParecerComponent } from './components/limite/views/parecer/parecer.component';
import { VisualizacaoComponent } from './components/limite/views/visualizacao/visualizacao.component'; 
import { DialogVinculacaoComponent } from './components/limite/views/dialog-vinculacao/dialog-vinculacao.component';

/** Material  */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter/';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion'; 

/** pipes  */
import { TransformTitlePipe } from './components/pipes/transform-title.pipe';
import { FormatAnyPipe } from './components/pipes/format-any.pipe';

import { DataService } from './components/limite/services/data.service'


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
    TransformTitlePipe,
    FormatAnyPipe
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
    MatMomentDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule ,
    MatSelectModule ,
    MatGridListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule ,
    MatFormFieldModule,
    DatePipe,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
