import React from 'react'
import   "./banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="segment">
                <img src=" https://i.ibb.co/z285N2B/product-media-import-1088106-3-product-removebg-preview.png" alt="left_image" className="left_image"/>

            </div>
            <div className="segment_center">
               <h2 className="title_line1">ça Commence Ici</h2>
               <hr/>
                <h1 className="title_line2">Vendre , Acheter </h1>
                <h6 className="title_line3">Tout type de vetement</h6>

                <button className="btn_publier_offre">
                    Publier une Offre
                </button>
            </div>
           
            <div className="segment">
                <img src="https://i.ibb.co/sFNdMrM/product-media-import-1086945-3-product.jpg" alt="image_left" className="right_image" />

            </div>
            
        </div>
    )
}

export default Banner
