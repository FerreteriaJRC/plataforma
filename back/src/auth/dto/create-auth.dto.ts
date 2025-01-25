import { IsEmail, IsNotEmpty, IsString, IsEmpty, IsStrongPassword, isString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @IsNotEmpty()
        @ApiProperty({
            description: 'Nombre del usuario',
            example: 'Jhon Darwin',
            type: String
        })
        @IsString()
        name: string;
              
        @ApiProperty({
            description: 'Apellido de ususario',
            example: 'Llanos Narvaez',
        })
        @IsNotEmpty()
        @IsString()
        surname: string;

        @ApiProperty({
            description: 'Nombre de usuario',
            example: 'Jhon24',
            type: 'string'
        })
        @IsNotEmpty()
        @IsString()
        nameUser: string;

        @ApiProperty({
            description: 'Contraseña del usuario',
            example: '@dm1n15tr4d0R',
            type: String
        })
        @IsStrongPassword()
        password: string;

        @ApiProperty({
            description: 'Confirmar contraseña',
            example: '@dm1n15tr4d0R',
            type: 'string'
        })
        @IsString()
        @IsNotEmpty()
        confirmPassword: string;

        @ApiProperty({
            description: 'Ocupacion dentro de la compañia',
            example: 'Sistemas',
            type: 'string'
        })
        @IsNotEmpty()
        @IsString()
        ocupation: string;

        @ApiProperty({
            description: 'Correo personal del usuario',
            example: 'jhon-2409@hotmail.com',
            type: 'string',
        })
        @IsEmail()
        @IsNotEmpty()
        emailPersonal: string;

        @ApiProperty({
            description: 'Correo empresarial del usuario',
            example: 'sistemas@ferreteriajrc.com',
            type: 'string'
        })
        @IsEmail()
        @IsEmpty()
        emailProfesional: string;

        @ApiProperty({
            description: 'rol por defecto Vendedor (No necesariamente debe estar)',
            example: 'Vendedor',
            type: 'string'
        })
        @IsEmpty()
        rol: string;
}
