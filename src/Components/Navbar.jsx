import {Outlet,Link} from "react-router-dom";
import React, { useContext } from 'react';
import {GlobalContext} from "../context";



const Navbar = () => {
  const {state, dispatch} = useContext(GlobalContext)

  return (
    <div className={`navbar ${state.class}`}>
      <div><img src="/img/logo.avif" alt="logo" className="logo"/></div>
      <nav >
          <ul className='navbar_ul' type="none">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/favs" >Favs</Link></li>
          <button onClick={() => dispatch({ type: 'THEME' })}
        
        className={`navbarButton ${state.class}`}>Change theme</button>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar