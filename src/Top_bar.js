import React from 'react'
import './top_bar.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Top_bar() {
    return (
        <div className="top_bar">
              <div className="btn_categorie">
                       Catégories de Produits
                   <ArrowDropDownIcon className="dropdown_icon" /> 
              </div>
            
            <form>
                <input type="text" className="searchbox" placeholder="    Chercher un produit " />
                <button className="search_button">
                  <SearchIcon className="search_icon" />
                </button>
            </form>
            
            
            
        </div>
    )
}

export default Top_bar
