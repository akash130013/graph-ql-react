import React, { useState } from 'react'
import { useLazyQuery , gql } from '@apollo/client'

const GET_CHARECTOR_SEARCH = gql`
query getCharectorSearch($name :String!) {
    characters(filter:{
    name:$name
  }){
     results{
      name
      location{
        dimension
      }
    } 
  }
}
`

export default function Search() {
    const [name , setName] = useState("")

const [getSearch, {loading, error, data, called}]= useLazyQuery(GET_CHARECTOR_SEARCH)

console.log({
    loading,
    error,
    data,
    called
});


const handleSearch = () => {
    getSearch({
      variables: {
        name
      }
    });
  };

  return (
    <div>
        <input type="text" placeholder='Search..' value={name} onChange={(e)=> setName(e.target.value)}/>
        <button type="button" onClick={()=> handleSearch()}>Search</button>
        {loading && <h3>Loading...</h3>}
        {data?.characters?.results?.map((charector)=>{
            return <li>{charector.name}</li>
        })}
    </div>
  )
}
