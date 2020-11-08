import React from 'react'
import Banner from './Banner'
import "./home.css"
import Product from './Product'
import Top_bar from "./Top_bar"

function Home() {
    return (
        <div className="home">
           <Top_bar />
           <Banner />
           

           <div className="home_content">
             <div className="row_title_div">
               <hr/>
                    <h4 className="row_title">Recement Publié</h4>
               <hr/>


             </div>
                <div className="product_row">
                    <Product 
                        title="PREMIUM BY JACK & JONES" 
                        rating={5}
                        price={30} 
                        image="https://www.ccvmode.com/125711-product_zoom_default/veste-homme-bleu.jpg" 
                    />

                    <Product
                        title="Veste Homme Réversible Mi Saison  "
                        rating={3}
                        price="500"
                        image="https://www.cdiscount.com/pdt2/6/6/5/1/700x700/mp05091665/rw/veste-mi-saison-homme-en-coton-casual-veste-col-mo.jpg"
                    />

                    

             </div>


                <div className="row_title_div">
                    <hr />
                    <h4 className="row_title">Plus Consulté</h4>
                    <hr />


                </div>
                <div className="product_row">
                    <Product
                        title="PREMIUM BY JACK & JONES"
                        rating={5}
                        price={30}
                        image="https://www.ccvmode.com/125711-product_zoom_default/veste-homme-bleu.jpg"
                    />

                    <Product
                        title="PREMIUM BY JACK & JONES"
                        rating={3}
                        price="500"
                        image="https://www.ccvmode.com/125711-product_zoom_default/veste-homme-bleu.jpg"
                    />

                    <Product
                        title="PREMIUM BY JACK & JONES"
                        rating={4}
                        price="500"
                        image="https://www.ccvmode.com/125711-product_zoom_default/veste-homme-bleu.jpg"
                    />

                </div>
           </div>
           
            
        </div>
    )
}

export default Home
