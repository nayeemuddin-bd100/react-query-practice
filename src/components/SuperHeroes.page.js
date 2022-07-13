import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SuperHeroes = () => {
    const [heroes,setHeroes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    useEffect(() => {
        axios.get("http://localhost:4000/superheroes")
            .then((res) => {
                const data = res.data
                setHeroes(data)
                setLoading(false)

            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
        })
    }, [])
    
    if (loading) {
        return <h2> Loading ......</h2>
    }
    if (error) {
        return <h2 style={{color: 'red'}}> {error} </h2>
    }
    return (
    <div>
          <h2>Traditional SuperHeroes page</h2>
          {
              heroes.map((hero) => {
                  return (
                      <div key={hero.id}> { hero.name}</div>
                  )
              } )
          }
          
    </div>
  );
}

export default SuperHeroes