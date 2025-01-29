import { Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: 'users'
})

export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    nameUser: string;
    @Column()
    password: string;
    @Column()
    confirmPassword: string;
    @Column()
    ocupation: string;
    @Column()
    emailPersonal: string;
    @Column()
    emailProfesional: string;
    @Column({default: 'vendedor'})
    rol: string;
}
