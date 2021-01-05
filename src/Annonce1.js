import React from 'react'
import Select from 'react-select';
import "./connexion.css"
import "./annonce.css"
import {Link} from 'react-router-dom'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
function Annonce1() {
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
                <h3>Informations Génerals</h3>
                <br/><br/><br/>
                <form>
                     <h5>Type du Bien</h5>
                    <br /><br /> <br /> 
                    <select>
                        <option value="Veste">Veste</option>
                        <option value="Chaussures">Chaussures</option>
                        <option selected value="Chemise">Chemise</option>
                        <option value="Jacket">Jacket</option>
                    </select>
                    <br /><br /><br /><br /><br />
                   
                    <h5>Type de Transaction</h5>
                    <br /><br /> <br />
                    <select>
                        <option value="grapefruit">Par Carte</option>
                        <option value="lime">Cache à la livraison</option>
                        
                    </select>
                    <br /><br /> <br />
                    <Link to="/annonce2">
                        <button type="submit" className="btn_sign_in">
                            Continuer
                        </button>
                    </Link>
                </form>
                
            </div>
        </div>
     
    )
}

export default Annonce1
