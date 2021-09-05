import { initializeApp } from "firebase/app";
import firebaseConfig from "../Config/firebaseConfig";
import useLocalStorage from "react-use-localstorage";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";


initializeApp(firebaseConfig)

export const Auth = () => {
    const auth = getAuth();
    const [userInfo, setUserInfo] = useLocalStorage("userInfo", "");
    const [loginError, setLoginError] = useState("");

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //CREATE USER
    const createUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(function () {
                        const { displayName, email } = result.user;
                        const signInUser = { name: displayName, email }
                        setUserInfo(JSON.stringify(signInUser))
                        swal({ text: "Sing up Successfully" })
                        getToken()
                        history.replace(from);
                        window.location.reload()
                    }).catch((error) => {
                        const errorMessage = error.message;
                        setLoginError(errorMessage)
                    })
            })
    }

    // SIGN_IN 
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setUserInfo(JSON.stringify(signInUser))
                swal({ text: "Sign In Successfully" })
                getToken()
                history.replace(from);
                window.location.reload();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginError(errorMessage)
            })
    }

    //GOOGLE SIGN_IN
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = { name: displayName, email, photo: photoURL };
                setUserInfo(JSON.stringify(signInUser));
                swal({ text: "Login successfully" });
                getToken()
                history.replace(from);
                window.location.reload();
            })
            .catch(error => {
                const errorMessage = error.message;
                setLoginError(errorMessage)
                console.log(errorMessage);
            })
    }

    //SIGN_OUT
    const sign_out = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("userInfo")
            swal({ text: "Sign out successfully" })
            history.replace(from);
            sessionStorage.removeItem("token")
            window.location.reload();
        })
    }

    const getToken = () => {
        auth.currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            // Send token to your backend via HTTPS
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            console.log(error);
        });
    }



    return {
        userInfo,
        loginError,
        createUser,
        signIn,
        googleSignIn,
        sign_out
    }
}
