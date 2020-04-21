import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Movies } from "src/movies/movies.entity";

@Entity()
export class UsersMovies extends BaseEntity{
    @PrimaryGeneratedColumn()
    userId: number;

    @PrimaryGeneratedColumn()
    movieId: number;

    @JoinTable()
    fmovies: Movies[];

}