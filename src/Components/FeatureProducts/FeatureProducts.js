import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { productsError, productsRequest, productsSuccess } from '../../Redux/products/productsAction';
import PaginationBar from '../PaginationBar/PaginationBar';
import ProductCard from '../ProductCard/ProductCard';
import './FeatureProducts.scss';

const FeatureProducts = () => {

    const dispatch = useDispatch()
    const myProducts = useSelector(state => state.myProducts.products)

    // pagination
    const [pageNumber, setPageNumber] = useState(1);
    const [productPerPage, setProductPerPage] = useState(12);

    const lastIndexOfProducts = productPerPage * pageNumber;
    const firstIndexOfProduct = lastIndexOfProducts - productPerPage;
    const currentProduct = myProducts.slice(firstIndexOfProduct, lastIndexOfProducts)

    // fetch all featured products
    useEffect(() => {
        dispatch(productsRequest())
        fetch("https://calm-mountain-62998.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(result => {
                dispatch(productsSuccess(result))
            })
            .catch(error => {
                dispatch(productsError(error.message))
            })
    }, [])


    const paginate = (number) => {
        setPageNumber(number)
    }

    const handleSorted = (value) => {
        if (value = "low_to_high") {
            currentProduct.sort((a, b) => {
                return parseInt(a.price) - parseInt(b.price)
            })
        } else if (value = "high_to_low") {
            currentProduct.sort((a, b) => {
                return parseInt(b.price) - parseInt(a.price)
            })
        }
    }


    return (
        <section className="feature-products">
            <div className="container">
                <div className="head-of-section">
                    <div className="d-flex justify-content-between">
                        <h5>FEATURE PRODUCTS</h5>
                        <select onChange={(e) => handleSorted(e.target.value)} name="" id="" className="form-control custom-select">
                            <option value="default">Defaul Collection</option>
                            <option value="low_to_high">Price low to high</option>
                            <option value="hight_to_low">Price high to low</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {

                        currentProduct.map(product =>
                            <ProductCard product={product} key={product.id}></ProductCard>)
                    }
                </div>
                <div className="d-flex justify-content-end">
                    <PaginationBar
                        paginate={paginate}
                        totalProduct={myProducts.length}
                        productPerPage={productPerPage}
                    >
                    </PaginationBar>
                </div>
            </div>
        </section>
    );
};

export default FeatureProducts;