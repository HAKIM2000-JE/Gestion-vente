import React , {useState , useEffect}from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
import { db } from "./firebase";
import { useHistory} from 'react-router-dom'
import './annonce.css'


function Vendorproduct({price, image, rating , title , id , hideButton}) {
    const [{ panier ,user}]= useStateValue();
    const [ids, setids] = useState([])
    const history = useHistory();
    const [Price, setPrice] = useState(price)
    const [Title, setTitle] = useState(title)
    // const supprimerPanier = () => {
    //     dispatch({
    //         type: "SUPPRIMER_PANIER",
    //         id: title,
    //     })
    // }
    const vendeur = user?.email 
    console.log(id)
    const mydb = db.collection('Products')
    useEffect(() => {
        const getProducts = () => {
            if (user) {
                let email = user?.email
                mydb.where('vendeur', '==', `${email}`).orderBy('price', 'desc').onSnapshot((querySnapshot) => {
                    const items = [];
                    querySnapshot.forEach((doc) => {
                        items.push(doc.id)
                       


                    });
                    console.log(items)
                    setids(items)
                    // setloading(false)
                   
                })
            }



            else {
                // setProducts([])
                alert('no user loged in')

            }
        }


        getProducts()

    }, [user])
    function deleteProduct() {
        mydb
            .doc(ids[0])
            .delete()
            .catch((err) => {
                console.error(err);
            });
        history.replace('/')
    }

    function editProduct(s) {
        const updatedProduct = {
            
            
                price:Price,
             
               title: Title,

                
                // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                // lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
           
        };
      
        mydb
            .doc(ids[0])
            .update(updatedProduct)
            .catch((err) => {
                console.error(err);
            });
        history.replace('/')
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_img" src={image} alt="" />
            <div className="checkoutProduct_info">
                <input className="checkoutProduct_title" type="text" value={Title} onChange={e=>setTitle(e.target.value)}/>
                
                <input value={Price}  type="number" onChange={e=>setPrice(e.target.value)} />
                    
                
                <div className="CheckoutProduct_rating">
                    {rating? Array(rating)
                        .fill()
                        .map((_) => (
                            <img
                                src="https://cdn.dribbble.com/users/411234/screenshots/2427834/star.png"
                                alt=""
                                className="star"
                            />
                        )):<h4>Pas encore évalué</h4>}
                </div>
                   

                   
                   <div className="btns">
                    <button className="CheckoutProduct_btn" onClick={e => deleteProduct()}>Supprimer l'annonce</button>





                    <button className="CheckoutProduct_btn" onClick={e => editProduct()} >Modifier l'annonce</button>
                   </div>
                        

               

            </div>
        </div>
    )
}

export default Vendorproduct
