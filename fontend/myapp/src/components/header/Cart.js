import React, { Component } from 'react'

import cart from '../../assets/Imgs/no-cart.png'

export default class Cart extends Component {
    render() {
        return (
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
        )
    }
}
