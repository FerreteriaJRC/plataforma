import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4  as uuid} from 'uuid';

@Entity({
    name: 'auth'
})

export class auth{
    @PrimaryGeneratedColumn()
    id: string = uuid();
    @Column()
    name: string;
    @Column()
    Surname: string;
    @Column()
    ocupation: string;
    @Column()
    emailpersonal: string;
    @Column()
    emailprofesional: string;
    @Column()
    role: string;
}
