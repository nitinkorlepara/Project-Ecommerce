import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">Brillio Store</a>
                </div>
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item ">
                        <a className="nav-link active" href="/viewproducts">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/cart">Cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/login">Login</a>
                    </li>
                </ul>

            </nav> 
            
               
        </div>
    )
}

export default Header
