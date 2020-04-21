import { IsNotEmpty } from "class-validator";
import { Genre } from "src/genre/genre.entity";

export class createUsersDto{
    @IsNotEmpty()
    name: string;
    genero: string;
    email: string;
    fgenre: Array<Genre>;
}
