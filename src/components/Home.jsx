import React, { useState } from 'react';
import MK from '../images/mkbag2.jpeg';

const Home = () => {

    const [basketNumbers, setBasketNumbers] = useState(0);

    // function untuk klik di add to cart
    const addToBasket = () => {
        setBasketNumbers(basketNumbers + 1); // tiap di pencet add cart, + 1   
    }
    return(
        <div className="container">
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$250,00</h3>
                <a onClick={addToBasket} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$150,00</h3>
                <a onClick={addToBasket} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$130,00</h3>
                <a onClick={addToBasket} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MK} alt="Michael Kors" />
                <h3>Grey Michael Kors</h3>
                <h3>$200,00</h3>
                <a onClick={addToBasket} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            <h1>Current Items in Cart {basketNumbers}</h1> 
            {/* sambungan dari atas */}
        </div>
    );
}

export default Home;