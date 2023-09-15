import React, {useContext} from 'react'
import {GlobalContext} from "../context";

const Footer = () => {
  const {state} = useContext(GlobalContext)
  return (
    <footer className={state.class}>
        <p>Powered by</p>
        <img src="/img/DH.png" alt='DH-logo' />
    </footer>
  ) 
}

export default Footer
