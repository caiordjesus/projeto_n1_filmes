import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MoviesClassification } from "./movies_classification.enum";
import { MoviesGenres } from "./movies_genres.enum";

@Entity()
export class Movies extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({ nullable: true})
    classification: MoviesClassification;

    @Column({ nullable: true})
    genre: MoviesGenres;

    @Column({ nullable: true})
    director: string;

    @Column({ nullable: true})
    duration: number;

    @Column({ nullable: true})
    main_cast: string;

    @Column({ nullable: true})
    favorite: boolean;

}