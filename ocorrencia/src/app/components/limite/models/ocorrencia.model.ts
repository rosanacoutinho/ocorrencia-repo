export interface Ocorrencia {
    id: number
    dataMovimento: string
    fundo: string
    divisao: string
    drive: number
    tipoLimite: string
    estado?: string
    alcada: string
    abertaEm: number
    prazo: number
    classificacao?: string
    consumo: number
    pl: number
    limite: number
    trackingError?: number
    limiteInferior?:number 
    limiteSuperior?: number
    banda?: string
    perda?: number
    perdaPercentual?: number
    retorno?: number
    perdaMaxima?:number
    periodo?: number 
}