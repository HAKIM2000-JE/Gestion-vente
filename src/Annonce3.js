import React , {useState} from 'react'
import "./connexion.css"
import "./annonce.css"
import { Link } from 'react-router-dom'

function Annonce3() {
    const [image, setimage] = useState('https://i.pinimg.com/originals/f9/58/18/f95818f914844d2b1cf7a45b232061d1.jpg')
    const imagehandler = (e)=>{
        const reader = new FileReader()
        reader.onload=()=>{
            if(reader.readyState==2){
                setimage(reader.result)
            }
            
        }
        reader.readAsDataURL(e.target.files[0])
    }
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
                <h3>Introduire l'image du Produit</h3>
                <br /><br />
                 <div className="container">
                     <img className="image_produit" src={image} alt=""/>
                     <input type="file" onChange={imagehandler}/>
                 </div>
                 <br/>
                <button type="submit" className="publier_btn">
                    Publier
                </button>
            </div>
            
        </div>

    )
}

export default Annonce3
