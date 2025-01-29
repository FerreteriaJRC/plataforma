import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({
    name: 'Products'
})

export class Products{
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column()
    description: string;

    @Column()
    reference: string;

    @Column()
    price: number;
}
