import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./WishList.scss";
import { removeFromWish } from '../../Redux/wishList/wishListAction';

const WishList = () => {

    const wishList = useSelector(state => state.wishItems.wish);
    const dispatch = useDispatch();

    return (
        <div className="wish-list">
            <div className="container">
                <h3>My wishlist on fashion world</h3>
                {
                    wishList.length > 0 ?
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Product name</th>
                                    <th>Unite price</th>
                                    <th>Stack status</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishList.map(wish =>
                                        <tr>
                                            <td onClick={() => dispatch(removeFromWish(wish._id))}><AiOutlineDelete /></td>
                                            <td>
                                                <img style={{ width: '120px' }} src={wish.image[0]} alt="" />
                                            </td>
                                            <td>{wish.name}</td>
                                            <td>&#2547; {wish.price}</td>
                                            <td className="text-success"><strong>In stock</strong></td>
                                            <td>
                                                <button className="btn btn-dark">
                                                    <BiShoppingBag />
                                                    Add to card
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        :

                        <p className="text-danger mt-4">WishList empty.</p>
                }
            </div>
        </div>
    );
};

export default WishList;