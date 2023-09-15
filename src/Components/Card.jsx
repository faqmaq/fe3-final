import React, {useContext} from "react";
import { GlobalContext } from "../context";
import {Outlet,Link} from "react-router-dom";

const Card = ({ name, username, id }) => {

  const {state, dispatch} = useContext(GlobalContext)  
  
  const addFav = ()=>{   
    const fav = {
      name,
      username,
      id
    }    
    dispatch({ type: 'ADD_FAV', payload: fav})
    //alert("AGREGADO A FAVORITOS")
  }
  const rmvFav = ()=>{ 
    
    const fav = {
      name,
      username,
      id
    }         
    dispatch({ type: 'REMOVE_FAV', payload: fav.id})
    const updatedFavsInLocalStorage = JSON.parse(localStorage.getItem('favs'));
    delete updatedFavsInLocalStorage[fav.id];
    localStorage.setItem('favs', JSON.stringify(updatedFavsInLocalStorage));
    setFavoritesUpdated(true);
  }

  const isAlreadyFav = state.favs.hasOwnProperty(id);

  return (
    <div className="card">        
        <Link to={`/dentist/${id}`}>
        <div >
          <img src="/img/doctor.jpg" alt="dentista" style={{width: 200, borderRadius: 15}}/>
        </div>
        <h3>ID: {id}</h3>
        <h5>NAME: {name}</h5>
        <h5>USERNAME: {username}</h5>
        </Link>
        {!isAlreadyFav && (
        <button onClick={addFav} className={`favButton ${state.class}`}>Add fav</button>
        )}
         {isAlreadyFav && (
        <button onClick={rmvFav} className={`favButton ${state.class}`}><img src="/favicon.ico" alt="Fav" style={{ width:25 }} /></button>
        )}

        <Outlet/>
    </div>
  );
};

export default Card;

