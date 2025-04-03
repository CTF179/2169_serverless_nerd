import React from 'react'
import { Pokemon } from '../model/Pokemon'

function PokeView({data}: {data: Pokemon | undefined}) {
  return (
    <>

        {
            (data && data.name) && 
            <>
                <h1>{data.name}</h1>
                <img src={data.sprites.front_default}/>
            </>
        }
    </>
  )
}

export default PokeView