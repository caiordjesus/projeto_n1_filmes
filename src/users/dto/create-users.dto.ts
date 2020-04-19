import { IsNotEmpty, IsDateString } from "class-validator";

export class createUsersDto{
    @IsNotEmpty()
    nome: string;
    genero: string;
    genero_favorito: string;
    email: string;
    telefone: number;
}