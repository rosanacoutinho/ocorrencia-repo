import { Autor } from './autor.model';

export interface Registro 
{    
    id: number 
    dataRegistro: string
    alcada: string
    parecer: string
    autor: Autor       
}