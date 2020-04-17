//Cambialo por tu proyecto en firebase.
export const firebaseConfig = {
    apiKey: "0",
    authDomain: "com",
    databaseURL: "httpscom",
    projectId: "a",
    storageBucket: ".com",
    messagingSenderId: "",
    appId: "1::web:158c38e7a23a01fae3bc01",
    measurementId: "G"
}


const ERROR_CODES = {
    "auth/invalid-email": "Introduzca un correo electrónico válido.",
    "auth/user-disabled": "Su usuario ha sido inhabilitado.",
    "auth/user-not-found": "Usuario no encontrado.",
    "auth/wrong-password": "Contraseña no válida.",
}

export function getError(error) {
    if (ERROR_CODES[error.code]) {
        return ERROR_CODES[error.code]
    } else {
        return error.message
    }
}