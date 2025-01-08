import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    surname: string;

    @IsNotEmpty()
    @IsString()
    ocupation: string;

    @IsEmail()
    @IsNotEmpty()
    emailPersonal: string;

    @IsEmail()
    @IsEmpty()
    emailProfesional: string;

    @IsEmpty()
    rol: string;
}

// export class User{
//     @PrimaryGeneratedColumn('uuid')
//     id: string = uuid()
//     @Column()
//     name: string;
//     @Column()
//     surname: string;
//     @Column()
//     ocupation: string;
//     @Column()
//     emailPersonal: string;
//     @Column()
//     emailProfesional: string;
//     @Column()
//     role: string;
// }