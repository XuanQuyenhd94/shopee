import React from 'react';
import cart from '../assets/Imgs/no-cart.png';

function Cart() {
    return (
        <>
            <div className="shp-cart">
                <a href className="shp-cart--link">
                    <i className="fa-solid fa-cart-shopping" />
                </a>
                <div className="shp-number--cart" />
                <div className="shp-noti--information cart-info">
                    <div className="shp-noti--img no-cart">
                        <img src={cart} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart