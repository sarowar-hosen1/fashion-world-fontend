import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productsError, productsRequest, productsSuccess } from '../../Redux/products/productsAction';
import PaginationBar from '../PaginationBar/PaginationBar';
import ProductCard from '../ProductCard/ProductCard';
import "./Collection.scss";

const SummerCollection = () => {
    const dispatch = useDispatch();
    const { collectionName } = useParams();
    const myProducts = useSelector(state => state.myProducts.products);

    //functionalities of paginationBar
    const [pageNumber, setPageNumber] = useState(1);
    const [productPerPage, setProductPerPage] = useState(12);

    const lastIndexOfProduct = pageNumber * productPerPage;
    const firstIndexOfProduct = lastIndexOfProduct - productPerPage;;

    const currentProduct = myProducts.slice(firstIndexOfProduct, lastIndexOfProduct);

    // Loading
    const Loading = useSelector(state => state.myProducts.Loading);

    useEffect(() => {
        dispatch(productsRequest())
        fetch(`https://calm-mountain-62998.herokuapp.com/collection/${collectionName}`)
            .then(res => res.json())
            .then(result => {
                dispatch(productsSuccess(result))
            })
            .catch(error => {
                productsError(error)
            })
    }, [collectionName])

    const paginate = (number) => {
        setPageNumber(number)
    }


    return (
        <div className="collection-product">
            <div className="container">
                <h5>{collectionName.toUpperCase()} COLLECTION</h5>
                <div className="row">
                    {
                        Loading ?
                            <h6>Loading...</h6>
                            :
                            currentProduct.map(product => <ProductCard product={product}></ProductCard>)
                    }
                </div>
                <div className="d-flex justify-content-end mb-4">
                    <PaginationBar
                        paginate={paginate}
                        totalProduct={myProducts.length}
                        productPerPage={productPerPage}
                    >
                    </PaginationBar>
                </div>
            </div>
        </div>
    );
};

export default SummerCollection;