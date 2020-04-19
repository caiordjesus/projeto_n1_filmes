import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    genero: string;

    @Column()
    genero_favorito: string;

    @Column()
    email: string;

    @Column()
    telefone: number;


}