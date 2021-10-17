import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    // get user name
    const handleNameChange = e => {
        setName(e.target.value);
    }
    // get user email
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    // password
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    // create a new user
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password)
        // validation 6 character
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        // validation must have digit
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Plz Ensure Pass has two digits.');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('please check email')
                setError('please check your email')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // set user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
            .catch(error => {
                setError(error.message)
            })
    }

    // reset password
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('please check your email')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // sign in using email and pass
    const processSignInEmailPass = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log('login successfully', result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // google sign in
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result.user)
        // })
        // .catch(error => {
        //     console.log(error.message)
        // })
    }
    // sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // observe user change or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }

        })
    }, [])

    return {
        user,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processSignInEmailPass,
        handleResetPassword,
        error,
        setError,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;