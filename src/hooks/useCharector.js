import { useQuery, gql } from '@apollo/client'

const GET_CHARECTOR = gql`
query getCharector($id :ID!) {
  character(id:$id){
      id
      name
      image
      gender
      episode{
        id
        name
        episode
        created
      }
  }
}
`

export default function useCharector(id) {
    const {loading, error, data} = useQuery(GET_CHARECTOR, {
        variables:{
          id
        }
    });

  return {
    loading,
    error,
    data
  }
     
}
