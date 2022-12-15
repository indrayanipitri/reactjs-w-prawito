import React, { Component } from "react";
import './Product.css';
import Troley from '../../../images/shopping-cart.png'
import Bubur from '../../../images/bubur.jpeg'

class Product extends Component {
    state = {
        order: 4
    }

    handlePlus = () => {
       this.setState ({
        order: this.state.order + 1
       })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState ({
                order: this.state.order - 1
            })
        }
       
    }

    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <h2>Pipit</h2>
                    </div>
                    <div className="troley">
                        <img src={Troley} alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                    <div className="card">
                        <div className="img-thumb-prod">
                            <img src={Bubur} alt="" />
                        </div>
                        <p className="product-title">Bubur Ayam</p>
                        <p className="product-price">Rp 20.000</p>
                        <div className="counter">
                            <button className="minus" onClick={this.handleMinus}>-</button>
                            <input type="text" value={this.state.order} />
                            <button className="plus" onClick={this.handlePlus}>+</button>
                        </div>
                    </div>
            </>
            
        )
    }
}

export default Product;