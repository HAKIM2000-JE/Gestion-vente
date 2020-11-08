import React from 'react'
import './product.css'

function Product({title, price, image, rating}) {
    return (
        <div>
            <div className="product">
                <div className="product_Info">
                    <p className="title">{title}</p>
                    <img src={image} className="product_image" alt="" />

                    <h3 className="product_price"> {price} DH</h3>

                    <div className="product_rating">
                        {Array(rating)
                            .fill()
                            .map((_) => (
                                <img
                                    src="https://cdn.dribbble.com/users/411234/screenshots/2427834/star.png"
                                    alt=""
                                    className="star"
                                />
                            ))}
                    </div>
                </div>

                <button className="btn" >
                    Add to Basket
                  </button>
            </div>
            
        </div>
    )
}

export default Product
