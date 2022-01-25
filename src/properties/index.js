//Cambialo por tu proyecto en firebase.
export const firebaseConfig = {
    apiKey: "AIzaSyBsDAo7ely8Kaw6sM0Kvlb7lbraLRRx-L0",
    authDomain: "think14.firebaseapp.com",
    databaseURL: "https://think14.firebaseio.com",
    projectId: "think14",
    storageBucket: "think14.appspot.com",
    messagingSenderId: "302274465556",
    appId: "1:302274465556:web:158c38e7a23a01fae3bc01",
    measurementId: "G-YP9YRLE43H"
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