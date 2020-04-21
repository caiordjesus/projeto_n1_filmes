import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Users } from "src/users/users.entity";

@Entity()
export class Genre extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
}