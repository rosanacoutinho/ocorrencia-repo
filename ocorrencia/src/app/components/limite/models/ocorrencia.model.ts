import { Registro } from './registro.model';

export interface Ocorrencia 
{
    id: number
    codigoSequencial : number
    dataHoraAbertura: string
    dataPrazoFinal : string
    dataMovimento:string
    alcadaAtual : string
    alcadaFinal : string
    classificacao: string
    estado : string
    ocorrenciaPrincipal : number
    atributos: {
            fundo?: string
            divisao?: string
            drive?: number
            tipoLimite?: string
            consumo?: number
            pl?: number 
            limite?: number
            perda?: number 
            perdaPercentual?: number
            trackingError?: number
            banda?: string
            duration?:number
            limiteInferior? :number
            limiteSuperior?:number
            retorno?: number
            perdaMaxima?: number
            periodo?:number 
           },
    registros?: Registro[]
  }