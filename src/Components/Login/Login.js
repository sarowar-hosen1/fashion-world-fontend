import React, { useState } from 'react';
import SignInForm from './SingInForm';
import SignUpForm from './SingUpForm';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

import './Login.scss';
import { Auth } from '../../Auth/Auth';
import swal from 'sweetalert';

const Login = () => {
    const [returnUser, setReturnUser] = useState(true);
    const auth = Auth();

    const handleGoogleSignIn = () => {
        auth.googleSignIn()
    }

    return (
        <div className="login">
            <div className="login-inner">
                <h5 className='text-center text-uppercase'>{returnUser ? "Sign in" : "Sign up"}</h5>
                {
                    returnUser ?
                        <SignInForm returnUser={returnUser}></SignInForm>
                        :
                        <SignUpForm returnUser={returnUser}></SignUpForm>
                }
                <div className="d-flex justify-content-between mt-3">
                    {returnUser && <button className="btn btn-link">Forgot password</button>}
                    {!returnUser && <button className="btn btn-link">Allready have an account</button>}
                    <button onClick={() => setReturnUser(!returnUser)} className="btn btn-link">{returnUser ? "SING UP" : "SIGN IN"}</button>
                </div>
                <hr />
                <div className="socail-login">
                    <i onClick={handleGoogleSignIn}><FcGoogle /></i>
                    <i onClick={() => swal({ text: "Service not available" })} className="text-primary"><ImFacebook2 /></i>
                </div>
            </div>
            {/* {
                error &&
                <p className="text-danger">{error}</p>
            } */}

        </div>
    );
};

export default Login;