import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsStrongPassword, IsNotEmpty, IsString } from 'class-validator';
import { UpdateUserDto } from 'src/users/dto/user.dto';

export class signInAuth extends PartialType(UpdateUserDto) {

    @ApiProperty({
        description: 'Nombre Usuario',
        example: 'jhon24',
        type: 'string'
    })
    @IsString()
    @IsNotEmpty()
    nameUser: string;

    @ApiProperty({
        description: 'Correo Personal',
        example: '@dm1n15tr4d0R',
        type: 'string'
    })
    @IsStrongPassword()
    @IsString()
    password: string;
}
