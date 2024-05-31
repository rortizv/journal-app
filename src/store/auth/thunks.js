import { signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials } from './';


export const checkingAuth = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        console.log(result);
    }
}