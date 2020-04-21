import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Movies } from "src/movies/movies.entity";
import { UsersGenres } from "./users-genres.enum";

@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true})
    dirth: string;

    @Column({ nullable: true})
    gender: string;

    @Column({ nullable: true})
    favorite_genre: UsersGenres;

    @Column({ nullable: true})
    email: string;

    @Column({ nullable: true}) 
    phone_number: number;

    @ManyToMany(type => Movies)
    @JoinTable()
    fmovies: Movies[];

}