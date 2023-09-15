import React, {useState, useContext} from "react";
import { GlobalContext } from "../context";

const Form = ({setPersona, setError}) => {
  const { state } = useContext(GlobalContext);
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleNombre = (e) => {        
      setNombre(e.target.value)
  }
  const handleEmail = (e) => {
      setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setError([])
    if(nombre.length > 5 && validateEmail(email)){
        setPersona({nombre,email})
        setNombre("")
        setEmail("")       
                                 
    } else {
        if (!validateEmail(email) && (nombre.length <= 5)){
            setError(["El nombre completo debe tener más de 5 caracteres","Debe ingresar un email válido"])                
        } else if (nombre.length <= 5){
            setError(["El nombre completo debe tener más de 5 caracteres"])         
        } else {
            setError(["Debe ingresar un email válido"])         
        }
        setPersona({nombre:"",email:""})                      
    }     
}
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full name" value={nombre} onChange={handleNombre}/>   
          <input type="email" placeholder="Email" value={email} onChange={handleEmail}/>   
          <button className={`sendButton ${state.class}`} type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
