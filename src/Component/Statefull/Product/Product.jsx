import React, { Component } from "react";
import './Product.css';
import Troley from '../../../images/shopping-cart.png'
import Bubur from '../../../images/bubur.jpeg'

class Product extends Component {
    render() {
        return (
            <>
                <div className="card-wrapper">
                    <div className="logo">
                        <h2>Pipit</h2>
                    </div>
                    <div className="troley">
                        <img src={Troley} alt="" />
                        <div className="count">3</div>
                    </div>
                    <div className="card">
                        <div className="img-thumb-prod">
                            <img src={Bubur} alt="" />
                        </div>
                        <p className="product-title">Bubur Ayam</p>
                        <p className="product-price">Rp 20.000</p>
                        <div className="counter">
                            <button className="minus">-</button>
                            <input type="text" value={3} />
                            <button className="plus">+</button>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Product;