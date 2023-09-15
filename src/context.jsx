import React, { createContext, useEffect, useReducer } from "react";

const globalReducer = (state,action) =>{
  switch(action.type){ 
      case "THEME":
        return {
          ...state,
          class: state.class === "dark" ? "light" : "dark"
        };
      case "LOAD_DENTISTS":
        return {
          ...state,
          dentists: action.payload,
          isLoading: false
        };
        case "ADD_FAV":    
        return {
          ...state,
          favs: {...state.favs, [action.payload.id]: action.payload} 
        };
        case "REMOVE_FAV":
          const  favId  = action.payload;           
          const updatedFavs = { ...state.favs };
          delete updatedFavs[favId];
          return {
            ...state,
            favs: updatedFavs,
          };
        case "REMOVE_FAVS":
          return {
            ...state,
            favs: {}           
          };
      default:
          return state;
  }
}


export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const initialState = { 
    class: "light", 
    dentists: [], 
    isLoading: true, 
    favs: JSON.parse(localStorage.getItem("favs")) || {}, 
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "LOAD_DENTISTS", payload: data });        
      })
      .catch((error) => {
        console.error("Error al obtener la lista: ", error);
      });
  }, []); 


  const [state,dispatch]= useReducer(globalReducer,initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  
  return (
    <GlobalContext.Provider value={{ state,dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;