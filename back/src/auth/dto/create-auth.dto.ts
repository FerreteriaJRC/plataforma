import { IsEmail, IsNotEmpty, IsString, IsEmpty, IsStrongPassword } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty()
        @IsString()
        name: string;

        @IsStrongPassword()
        password: string;
    
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
