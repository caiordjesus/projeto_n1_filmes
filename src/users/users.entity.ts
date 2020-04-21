import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Genre } from "src/genre/genre.entity";

@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true})
    genero: string;

    @Column()
    email: string;

    @ManyToMany(type => Genre)
    @JoinTable()
    fgenre: Genre[];
}