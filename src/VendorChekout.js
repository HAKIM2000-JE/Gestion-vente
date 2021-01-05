import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider"
import {Link} from 'react-router-dom'
import './Total.css'
import Vendorproduct from './Vendorproduct';
import { CodeSharp } from '@material-ui/icons';

function VendorChekout() {
    const [{panier,user}]=useStateValue()
    const [products, setProducts] = useState([])
    // const [loading, setloading] = useState(false)

    const mydb = db.collection('Products')
    
     


    useEffect(() => {
        const getProducts = () => {
            if (user){
                let email = user?.email
                mydb.where('vendeur', '==', `${email}`).orderBy('price','desc').onSnapshot((querySnapshot) => {
                    const items = [];
                    querySnapshot.forEach((doc) => {
                        items.push(doc.data())
                        console.log(doc.id)


                    });
                    console.log(items)
                    setProducts(items)
                    // setloading(false)
                    console.log(products)
                    console.log(products)
                })
            }
          


            else{
                setProducts([])
                 alert('no user loged in')

            }
        }
            
           
             getProducts()
        products?.map(product => (
            console.log(product.id)
        ))

    }, [user])
    
    return (

        <div className="checkout">
            <div className="checkout__gauche">
                {user ? <h3>Mes Annonces </h3> : <h3>Connecter vous pour consulter vos Annonces</h3>}
                
               
                        <div>
                            <h2 className="checkout_panier_titre"></h2>
                            {/* La liste des produits qu'on a affecté */}
                            {products?.map(product=> (
                                <Vendorproduct
                                    id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    rating={product.rating} />
                                    
                                
                                
                            ))}
                            

                        </div>
                    
                
            </div>
            <div className="checkout__droite">
                <Link to="/annonce">
                    <button className="proceed_subtotal">
                        Ajouter Une Annonce
            </button>
              </Link>
                
            </div>

        </div>
    )
}

export default VendorChekout
