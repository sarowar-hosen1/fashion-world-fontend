import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Auth } from '../../Auth/Auth';

import './Login.scss';

const SignInForm = ({ returnUser }) => {
    const auth = Auth();
    const [passType, setPassType] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        if (returnUser) {
            if (email, password) {
                auth.signIn(email, password);
            }
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Email address</label>
                <input
                    className="form-control"
                    {...register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/
                    })}
                />
                {errors.email && <span>Email is required</span>}
            </div>

            <div className="form-group">
                <label>Passowrd</label>
                <input
                    type={passType ? "text" : "password"}
                    className="form-control"
                    {...register("password", {
                        required: true,
                        pattern: /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/
                    })}
                />
                <span onClick={() => setPassType(!passType)} className="icon">
                    {
                        passType ?
                            <i className="far fa-eye-slash"></i>
                            :
                            <i className="far fa-eye"></i>
                    }
                </span>

                {errors.password && <span>Password between 8 characters</span>}
            </div>

            <input className="btn btn-outline-secondary" type="submit" />
        </form>
    );
};

export default SignInForm;