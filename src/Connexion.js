import React from 'react'
import "./connexion.css"
import {Link} from "react-router-dom"
function Connexion() {
    return (
        <div className="connexion">
            <div className="login">
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
                    <h1>Sing In</h1>
                    <form>
                       
                        <input
                            // value={email}
                            // onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            placeholder="E-mail"
                            
                        />
                        
                        <input
                            // value={password}
                            // onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                        <button  type="submit" className="btn_sign_in">
                            Sign In
                        </button>
                    </form>
                   <br/>
                   <br/>
                    
                    <button className="btn_inscrire">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Connexion
