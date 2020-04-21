import { IsNotEmpty } from "class-validator";
import { MoviesClassification } from "../movies_classification.enum";
import { MoviesGenres } from "../movies_genres.enum";

export class createMoviesDto{
    @IsNotEmpty()
    name: string;
    classification: MoviesClassification;
    genre: MoviesGenres;
    director: string;
    duration: number;
    main_cast: string;
    favorite: boolean;
}