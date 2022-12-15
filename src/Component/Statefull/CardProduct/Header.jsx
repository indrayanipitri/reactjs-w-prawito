import React, { Component } from "react";
import '../Product/Product.css';
import Troley from '../../../images/shopping-cart.png'
import Card from "./Card";

class Header extends Component {
    state = {
        order: 4
    }

    handleChangeCounter = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render () {
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
                <Card onCounterChange={ (value) => {this.handleChangeCounter(value)} } />
            </>
        )
    }
}

export default Header;