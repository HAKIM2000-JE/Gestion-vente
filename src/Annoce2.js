import React from 'react'
import Select from 'react-select';
import "./connexion.css"
import "./annonce.css"
import { Link } from 'react-router-dom'

function Annonce2() {
    return (

        <div className="annonce">
            <div className="login_logo">
                <Link to="/">
                    <img
                        src="https://i.ibb.co/6RYVgyN/Capture.png"
                        alt=""
                        className="login_logo"
                    />
                </Link>
            </div>
            <div className="login_container">
                <h3>Description du Produit</h3>
                <br /><br />
                <form>
                    <h5>Titre du Produits</h5>
                    <br /><br />
                       <input type="text"/>
                   

                    <h5>Prix</h5>
                    <br /> <br /><br />
                      <input type="text"/>
                    
                    <Link to="/annonce3">
                        <button type="submit" className="btn_sign_in">
                            Continuer
                        </button>
                    </Link>
                    
                </form>

            </div>
        </div>

    )
}

export default Annonce2
