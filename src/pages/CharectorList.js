import React from 'react'
import './style.css'
import useCharectors from '../hooks/useCharectors';
import { Link } from 'react-router-dom';


export default function CharectorList() {
    const {loading, error, data} = useCharectors(); 
   if(error)return <h2>Something went wrong ...</h2>
   if(loading) return <h2>Loading...</h2>
  return (
    <div className='charectors'>
        {data.characters.results.map((item) =>{
            return <Link to={`/detail/${item.id}`}>
                <div>
                <img src={item.image} alt="image" />
                <h3>{item.name}</h3>
                </div>
            </Link>
        })}
    </div>
  )
}
