import fireabase from 'firebase';
import {getError} from '../properties';


export function loginWithEmailAndPassword(email,password){
    return new Promise((resolve,reject)=>{
        fireabase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
            resolve(user);
        }).catch((error)=>{
            reject({error:getError(error)});
        });
    });
}
