import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
    const [{ panier, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    console.log(user)
    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
            alert('no user loged in')
        }

    }, [user])

    return (
        <div className='orders'>
            {user ? <h3>Vos Commandes</h3> : <h3>Connecter vous pour consulter vos commandes</h3> }

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
            {user ?   (<h5 className="merci">Merci Pour votre visite</h5>) : ""}
            
        </div>
    )
}

export default Orders