import { IsNotEmpty, IsDateString } from "class-validator";

export class createGenreDto{
    @IsNotEmpty()
    name: string;
}
