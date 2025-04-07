import React from 'react'

function PokeSearchComponent(props: any) {

  function pokemonNumberInput(event: React.ChangeEvent<HTMLInputElement>){
    props.setPokemonNumber(event.target.value);
  }

  return (
    <>
      <h2>Pokemon Search</h2>
      <input onChange={pokemonNumberInput} type="number"></input>
    </>
  )
}

export default PokeSearchComponent