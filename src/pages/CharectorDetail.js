import React from 'react'
import useCharector from '../hooks/useCharector'
import './style.css'
import { useParams } from 'react-router-dom';

export default function CharectorDetail() {

    const {id} = useParams();
    const {error, data, loading} = useCharector(id);

    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>Something went wrong...</h3>
    console.log({error, data});
  return (
    <div className='char'>
        <img src={data?.character?.image} alt="image" />
        <h2>{data?.character?.name}</h2>
        
        {data?.character?.episode?.map((episode)=>{
            return <><li>{episode.name}- {episode.created}</li><br/></>
        })}
    </div>
  )
}

