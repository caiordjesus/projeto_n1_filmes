import { IsNotEmpty } from "class-validator";
import { UsersGenres } from "../users-genres.enum";
import { Movies } from "src/movies/movies.entity";

export class createUsersDto{
    @IsNotEmpty()
    name: string;
    dirth: string;
    gender: string;
    favorite_genre: UsersGenres;
    email: string;
    phone_number: number;
    fmovies: Movies[];
}