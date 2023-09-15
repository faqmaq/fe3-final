import React, {useState, useEffect, useContext} from 'react'
import {GlobalContext} from "../context";
import { useParams,Link } from 'react-router-dom'

const Detail = () => {
  const {state} = useContext(GlobalContext)
  const [dentist, setDentist] = useState([])
  const params = useParams()
  const getDentist = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    setDentist(data)
   }

useEffect(()=>{
  getDentist()
}, [params])

  return (
    <div className={`details ${state.class}`}>
      <h1>Detail Dentist {dentist.id} </h1>
      <div className='details_img'>
          <img src="/img/doctor.jpg" alt="dentista" style={{width: 200}}/>
      </div>
      <div className='details_ul'>
        <ul type="none">
          <li>NAME: </li>
          <li>EMAIL: </li>
          <li>PHONE: </li>
          <li>WEB: </li>
        </ul>
        <ul type="none">
          <li>{dentist.name}</li>
          <li>{dentist.email}</li>
          <li>{dentist.phone}</li>
          <li><Link to="/" >{dentist.website}</Link></li>
        </ul>
      </div>
  
    </div>
  )
}

export default Detail