import { useQuery, gql } from '@apollo/client'

const GET_CHARECTORS = gql`
query {
  characters{
    results{
      id,
      name,
      image,
      gender
    }
  }
}`

export default function useCharectors() {
    const {loading, error, data} = useQuery(GET_CHARECTORS);
  return {
    loading,
    error,
    data
  }
     
  
}
