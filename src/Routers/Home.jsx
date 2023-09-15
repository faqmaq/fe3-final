import React, {useContext} from 'react'
import {GlobalContext} from "../context";
import Card from '../Components/Card'


const Home = () => {
  const{state}= useContext(GlobalContext);
  if (state.isLoading) {
    return <div className='loading'>Cargando Lista...</div>;
  }
  return (
    <main className={`home ${state.class}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        
        {state.dentists.map ((dentista) =>
        (<Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>
        ))}

      </div>
    </main>
  )
}

export default Home