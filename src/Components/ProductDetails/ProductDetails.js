import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetails = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch(`https://calm-mountain-62998.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(result => setProduct(result))
    }, [])

    const handleChangeImage = (link) => {
        setImage(link)
    }

    console.log(product.binaryImg);

    return (
        <div className="ProductDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="product-images">
                            {
                                product.binaryImg ?
                                    <img src={`data:image/jpeg;base64,${product.binaryImg}`} alt="" />
                                    :
                                    product.image &&
                                    <img src={image ? image : product.image[0]} alt="" />
                            }
                            <div className="product-more-image">
                                {
                                    product.image &&
                                    product.image.map(img =>
                                        <img onClick={() => handleChangeImage(img)} src={img} alt="" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-details-content">
                            <h5>{product.name}</h5>
                            <h6 className="text-muted">&#2547;{product.price}</h6>
                            <ul className="list-unstyled">
                                <li><strong>Color:</strong> {product.color}</li>
                                <li><strong>Available:</strong> <span>In Stock</span></li>
                            </ul>
                            <div className="d-flex">
                                <h6>Qnty: </h6>
                                <select>
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button className='btn btn-dark'>Add to cart</button>
                            </div>
                            <ul className="special-note">
                                <li>Free delivery at TK 3000 purchase</li>
                                <li>Product color may shighly vary, depend on your device screen regulation</li>
                            </ul>
                            <p className="details"><strong>Product Details: </strong>{product.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;