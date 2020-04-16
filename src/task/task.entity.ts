import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Double } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}

@Entity()
export class Movies {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    classification: number;

    @Column()
    genre: string;

    @Column()
    director: string;

    @Column()
    duration: number;

    @Column()
    mainCast: string;

}