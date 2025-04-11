import { ILoginErrors, ILoginRequest } from "../interfaces/interfaces";

export function validateLoginForm(values: ILoginRequest): ILoginErrors {
    const errors: ILoginErrors = {}

    //* Validacion para el campo username
    if(!values.username){
        errors.username = "El campo nombre de usuario es requerido";
    }

    //*Valicaion para el campo password
    if(!values.password){
        errors.password = "El campo de contraseña es requerido";
    } else if (values.password.length < 6){
        errors.password = "La contraseña debe contener mas de 6 caracteres";
    }

    return errors;
}