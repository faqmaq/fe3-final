

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import Card from "../Components/Card";

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const favorites = JSON.parse(localStorage.getItem("favs"));
  const [showFavorites, setShowFavorites] = useState(true);
  const [favoritesUpdated, setFavoritesUpdated] = useState(false);

  useEffect(() => {
    if (Object.keys(state.favs).length === 0) {
      setShowFavorites(false);
    } else {
      setShowFavorites(true);
    }
  }, [state.favs, favoritesUpdated]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFavoritesUpdated(false);
    }, 1000); 
  
    return () => clearTimeout(timer);
  }, [favoritesUpdated]);

  return (
    <div className={`favs ${state.class}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {showFavorites &&
          Object.values(favorites).map((dentista) => (
            <div key={dentista.id}>
              <Card
                name={dentista.name}
                username={dentista.username}
                id={dentista.id}
              />
            </div>
          ))}
      </div>
      {showFavorites && (
        <div>
          <button
            className={`rmvFavsButton ${state.class}`}
            onClick={() => dispatch({ type: "REMOVE_FAVS" })}
          >
            Remove Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default Favs;
