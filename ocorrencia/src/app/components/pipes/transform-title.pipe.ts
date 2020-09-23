import { Pipe, PipeTransform } from '@angular/core';
/*
 * Split camel case strings! 
 * dataMovimento vira Data Movimento =)
*/
@Pipe({name: 'transformTitle'})
export class TransformTitlePipe implements PipeTransform {
  transform(valor: string): string {
    return valor.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ').toLowerCase();
  }
}