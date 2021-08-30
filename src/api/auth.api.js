import { firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (email, password) => {
    const auth = getAuth(firebaseApp);
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.code, error.message);
        });
}
