import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, isString, IsString, IsStrongPassword } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty(
        {
            description: 'Nombre del usuario',
            example: 'Jhon Darwin',
            type: String,
        }
    )
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Apellido del usuario',
        example: 'Llanos Narvaez',
        type: String
    })
    surname: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Ocupacion del usuario',
        example: 'Encargado Sistemas',
        type: String
    })
    ocupation: string;

    @IsStrongPassword()
    @IsString()
    @ApiProperty({
        description: 'Contraseña del usuario',
        example: '@dm1n15tr4d0R',
        type: String
    })
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Confirmar contraseña',
        example: '@dm1n15tr4d0R',
        type: String
    })
    confirmPassword: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Correo personal del usuario',
        example: 'jhond-2409@hotmail.com',
        type: IsEmail
    })
    emailPersonal: string;

    @IsEmail()
    @IsEmpty()
    @ApiProperty({
        description: 'Correo profesional del usuario',
        example: 'sistemas@ferreteriajrc.com',
        type: IsEmail
    })
    emailProfesional: string;

    @IsEmpty()
    @IsEnum(['admin', 'vendedor', 'general'])
    rol: string;
}