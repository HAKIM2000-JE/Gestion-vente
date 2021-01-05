import  React , {useState , useEffects} from 'react'
import Annonce2 from './Annoce2'
import Annonce1 from './Annonce1'
import './annonce.css'
import {Link} from 'react-router-dom'
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";



function Annonce() {
    const [{panier , user}]= useStateValue()
    const mydb= db.collection("Products")
    const vendeur = user?.email 
     const [title, settitle] = useState("qsq")
     const [image, setimage] = useState("im")
     const [price, setprice] = useState(0)
     const [rating, setrating] = useState(0)
     const [type, settype] = useState("Homme")
    
 function addProduct() {
       
        const newProduct = {
            image,
            price,
            rating,
            title,
            
            vendeur,
           
            // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            // lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        };

        mydb
            .doc(newProduct.id)
            .set(newProduct)
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="annonce">
        <div className="left">
               
                <div className="login_container">
                    <h3>Informations Génerals</h3>
                    <br /><br /><br />
                    <form>
                        <h5>Type du Bien</h5>
                        <br /><br /> <br />
                        <select>
                            <option  selected value={type} onChange={e=>settype(e.target.value)}>Homme</option>
                            <option value="Femme">Femme</option>
                            <option  value="Bebe">Bebe</option>
                            <option value="Autre">Autre</option>
                        </select>
                        <br /><br /><br /><br /><br />

                        <h5>Type de Transaction</h5>
                        <br /><br /> <br />
                        <select>
                            <option value="grapefruit">Par Carte</option>
                            <option value="lime">Cache à la livraison</option>

                        </select>
                        <br /><br /> <br />

                    </form>

                </div>

        </div>
            <div className="right">
                <div className="login_container">
                    <h3>Description du Produit</h3>
                    <br /><br />
                    <form>
                        <h5>Titre du Produits</h5>
                        <br /><br />
                        <input type="text" value={title} 
                        onChange={(e)=>settitle(e.target.value)}  />


                        <h5>Prix en DH</h5>
                        <br /> <br /><br />
                        <input type="number" value={price} onChange={(e) => setprice(Number(e.target.value))}   />

                        <h5>image</h5>
                        <br /> <br /><br />
                        <input type="text" value={image} onChange={(e) => setimage(e.target.value)}  />

                        <Link to="/vendorcheckout">
                            <button type="submit" className="btn_sign_inn" onClick={addProduct}>
                                Publier
                        </button>
                        </Link>

                    </form>

                </div>

            </div>
            
        </div>
    )
}

export default Annonce
