import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import "./ShippingAddress.scss";
import swal from "sweetalert";

const ShippingAddress = ({setShippingInfo}) => {
    const [districts, setDistricts] = useState([]);
    const user = JSON.parse(localStorage.getItem('userInfo'));
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setShippingInfo(data)
        swal({text:"Now place your order!"})
    };


    useEffect(() => {
        fetch("http://bdapis.herokuapp.com/api/v1.1/districts")
            .then(res => res.json())
            .then(result => setDistricts(result.data))
    }, [])

    return (
        <div className="shipping-address">
            <h5>Shipping Address</h5>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name</label>
                    <input defaultValue={user.name} className="form-control" {...register("name", { required: true })} />
                    {errors.name && <span>Name is required</span>}
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input className="form-control" type="number" {...register("phone", { required: true })} />
                    {errors.phone && <span>Phone is required</span>}
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input defaultValue={user.email} className="form-control" type="email" {...register("email", { required: true })} />
                    {errors.email && <span>Email is required</span>}
                </div>
                <div className="form-group">
                    <label>Districts</label>
                    <select
                        className="form-control"
                        style={{ appearance: "auto" }}
                        placeholder="District"
                        {...register("district", { required: true })}
                    >
                        <option selected disabled>District</option>
                        {
                            districts.map(district => <option value={district.district}>{district.district}</option>)
                        }
                        {errors.district && <span>District is required</span>}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Address</label>
                    <input className="form-control" {...register("address", { required: true })} placeholder="Comilla, Chittagong" />
                    {errors.address && <span>Address is required</span>}
                </div>

                <input className="btn btn-secondary w-25 mt-4" type="submit" />
            </form>
        </div>
    );
};

export default ShippingAddress;