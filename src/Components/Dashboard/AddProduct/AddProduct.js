import BackupIcon from '@material-ui/icons/Backup';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddProduct.scss";

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const file = data.image[0];
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("category", data.category)
        formData.append("color", data.color)
        formData.append("details", data.details);
        formData.append("file", file)
        fetch("https://calm-mountain-62998.herokuapp.com/add-product", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    swal({ text: "Added successfully" })
                }
            })

    };


    return (
        <div className="addProduct">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-info">
                    <div className="input-box">
                        <label>Product Name</label>
                        <input {...register("name", { required: true })} />
                        {errors.name && <span>Name is required</span>}
                    </div>
                    <div className="input-box">
                        <label>Price</label>
                        <input type="number" {...register("price", { required: true })} />
                        {errors.price && <span>price is required</span>}
                    </div>
                    <div className="input-box">
                        <label>Category</label>
                        <select {...register("category", { required: true })}>
                            <option value="category" selected disabled>Category</option>
                            <option value="girl">girl</option>
                            <option value="summer">summer</option>
                            <option value="man">man</option>
                            <option value="kids">kids</option>
                        </select>
                        {errors.category && <span>This field is required</span>}
                    </div>
                    <div className="input-box">
                        <label>Color</label>
                        <select {...register("color", { required: true })}>
                            <option value="color" selected disabled>Chooice Color</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                            <option value="blue">Blue</option>
                            <option value="sky blue">Sky blue</option>
                            <option value="navy blue">Navy blue</option>
                            <option value="powderblue">Powderblue</option>
                        </select>
                        {errors.color && <span>This field is required</span>}
                    </div>
                </div>
                <div className="input-details">
                    <label>Product Details</label>
                    <textarea name="details" id="" cols="30" rows="5" {...register("details", { required: true })} />
                    {errors.details && <span>Details is required</span>}
                </div>
                <div className="upload-box">
                    <label id="Upload" htmlFor="image">
                        <BackupIcon />
                        Upload image
                    </label>
                    <input id="image" {...register("image", { required: true })} type="file" />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;