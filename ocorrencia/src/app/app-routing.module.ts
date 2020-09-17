import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**Limite */
import { RelatorioComponent } from './components/limite/views/relatorio/relatorio.component'
import { TratamentoComponent } from './components/limite/views/tratamento/tratamento.component'
import { AcompanhamentoComponent } from './components/limite/views/acompanhamento/acompanhamento.component'
import { DetalhamentoComponent } from './components/limite/views/detalhamento/detalhamento.component'

import { ParecerComponent } from './components/limite/views/parecer/parecer.component'
import { VisualizacaoComponent } from './components/limite/views/visualizacao/visualizacao.component'


const routes: Routes = [
  {
  path:"limite",
  component: RelatorioComponent
},
{
  path:"limite/tratamento",
  component: TratamentoComponent
},
{
  path:"limite/acompanhamento",
  component: AcompanhamentoComponent
},
{
  path:"limite/detalhamento",
  component: DetalhamentoComponent
},
{
  path:"limite/parecer",
  component: ParecerComponent
},
{
  path:"limite/visualizacao",
  component: VisualizacaoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
