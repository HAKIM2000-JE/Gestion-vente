import React from 'react'
import './header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"

function Header() {
    return (
            <div className="header">
            <div class="navbar navbar-expand-lg navbar-light bg-light mynavbar">
                <a class="navbar-brand" href="#">
                    <img src="https://i.ibb.co/6RYVgyN/Capture.png" alt="logo_img" className="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Nos Produits
                              </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Homme</a>
                                <a class="dropdown-item" href="#">Femme</a>
                                <a class="dropdown-item" href="#">Bebe</a>
                            </div>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacter Nous</a>
                        </li>
                    </ul>

                </div>
            </div>

             <div className="cnx_panier">
             <Link to="/connexion">
                    <AccountCircleIcon className="cnx_icon" />

             </Link>
                <ShoppingBasketIcon className="panier_icon" />
                <div className="item_number">
                    <span >0</span>

               </div>
             </div>
            
            </div>
        
            
    )
}

export default Header
