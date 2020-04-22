import React from 'react';

function Navbar() {
    return (
      <header>
            <div className="overlay"></div>
            <nav>
            <h2>Shop</h2>
            <ul>
                <li><a href ="#">Home</a></li>
                <li><a href ="#">About</a></li>
                <li className="cart"><a href ="#">
                <ion-icon name="basket"></ion-icon>
                Cart<span></span></a></li>
            </ul>
            </nav>
      </header>
    );
}

export default Navbar;
