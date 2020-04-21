import { IsNotEmpty } from "class-validator";
import { MoviesClassification } from "../movies_classification.enum";
import { Genre } from "src/genre/genre.entity";

export class createMoviesDto{
    
    @IsNotEmpty()
    name: string;

    classification: MoviesClassification;

    @IsNotEmpty()
    genres: Array<Genre>;

}