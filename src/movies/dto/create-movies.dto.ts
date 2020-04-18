import { IsNotEmpty } from "class-validator";
import { MoviesClassification } from "../movies_classification.enum";

export class createMoviesDto{
    @IsNotEmpty()
    name: string;
    classification: MoviesClassification;
    genre: string;
    director: string;
    duration: number;
    main_cast: string;
    favorite: boolean;
}