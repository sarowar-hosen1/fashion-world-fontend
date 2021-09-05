import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { Auth } from '../../Auth/Auth';

import './Login.scss';

const SignUpForm = ({ returnUser }) => {
    const auth = Auth();
    const [passType, setPassType] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        const { first_name, last_name, email, password } = data;
        const name = `${first_name} ${last_name}`;
        if (!returnUser) {
            if (name, email, password) {
                auth.createUser(name, email, password)
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" {...register("first_name", { required: true })} />
                    {errors.first_name && <span>Fist Name is required</span>}
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" {...register("last_name", { required: true })} />
                    {errors.last_name && <span>Last Name is required</span>}
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input className="form-control" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                    {errors.email && <span>Email is required</span>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        type={passType ? "text" : "password"}
                        {...register("password", {
                            required: "You must specify a password",
                            minLength: 8,
                            message: "Password must be at least 8 characters"
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <div className="form-group">
                    <label>Repeat Password</label>
                    <input
                        className="form-control"
                        type={passType ? "text" : "password"}
                        {...register("repeat_password",
                            {
                                required: true, validate: value =>
                                    value === password.current || "The Password do not match"
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
                    {errors.repeat_password && <span>{errors.repeat_password.message}</span>}
                </div>

                <input className="btn" type="submit" />
            </form>
        </>
    );
};

export default SignUpForm;