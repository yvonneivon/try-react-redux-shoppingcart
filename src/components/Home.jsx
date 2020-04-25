import React, { useState } from 'react';
import MK from '../images/mkbag2.jpeg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addActions';

const Home = (props) => {
    console.log(props);
    
    return(
        <div className="container">
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$250,00</h3>
                <a onClick={() => props.addBasket('mkBlack')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$150,00</h3>
                <a onClick={() => props.addBasket('mkPink')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$130,00</h3>
                <a onClick={() => props.addBasket('mkCaramel')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$200,00</h3>
                <a onClick={() => props.addBasket('mkYellow')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
        </div>
    );
}

export default connect(null, { addBasket })(Home);