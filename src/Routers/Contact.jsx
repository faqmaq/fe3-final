import React, { useContext, useState } from "react";
import {GlobalContext} from "../context";
import Form from '../Components/Form'


const Contact = () => {
  const {state} = useContext(GlobalContext)
  const [persona, setPersona] = useState({})
  const [error, setError] = useState([])
  const successMessage = (persona) => {
    if(persona.nombre){
      return(
        <p>Gracias {persona.nombre}, te
        contactaremos cuando antes vía mail</p>
      )
    }
  }

  return (
    <div className={`contact ${state.class}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      {error.map((error,index) => (
        <div key={index}>
            <h4 className="error">{error}</h4>
        </div>
      ))}
      <Form setPersona={setPersona} setError={setError} />   
      {successMessage(persona)}
    </div>
  )
}

export default Contact