import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { MoviesClassification } from "./movies_classification.enum";
import { Genre } from "src/genre/genre.entity";

@Entity()
export class Movies extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({ nullable: true})
    classification: MoviesClassification;

    @ManyToMany(type => Genre)
    @JoinTable()
    genres: Genre[];
}