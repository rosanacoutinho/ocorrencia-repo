import { Pipe, PipeTransform } from '@angular/core';
/*
 * classe criada para formatar um valor especifico qualquer CASO seja necessario
 *
 * USO {{ valorAtributo | formatAny: nomeAtributo }}
*/
@Pipe({name: 'formatAny'})
export class FormatAnyPipe implements PipeTransform {

  transform(value: any, name?: string): number {

    var value: any

        if (name == 'tipoLimite' || name == 'classificacao' || name == 'alcadaFinal' || name == 'alcadaAtual' || name == 'estado')
            value = value.replace("_", " ");
        
        if (name == 'limite')
            value = value.toPrecision(4);

        if (name == 'consumo')
            value = Number(value/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
 


    return value;
  }

}
