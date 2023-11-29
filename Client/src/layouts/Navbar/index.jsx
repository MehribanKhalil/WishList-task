import React from 'react'
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useWishListContext } from '../../Context/WishlistContext';
import './index.scss'

const Navbar = () => {
    const { favItems } = useWishListContext()
    return (
        <div className='navbar_section'>
            <div className="container">
                <div className="nav_content">
                    <div className="nav_left">
                        <ul className="d-flex gap-4 align-items-center">
                            <li>
                                <NavLink to={"/"}> <img src="https://portotheme.com/html/molla/assets/images/logo.png" alt="" /> </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/shop"}>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/product"}>Product</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/blog"}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav_right">
                        <ul>
                            <li>
                                <NavLink to={"/wishlist"}>
                                    <CiHeart className='wish_icon' /> WishList
                                    <span>({favItems.length})</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar