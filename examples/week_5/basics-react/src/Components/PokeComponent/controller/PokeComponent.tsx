import React, { useEffect, useState } from 'react'
import PokeView from '../view/PokeView';
import { Pokemon } from '../model/Pokemon';

function PokeComponent() {

  let [pokemonNumber, setPokemonNumber] = useState<string|undefined>(undefined);

  let [pokeData, setPokeData] = useState<Pokemon | undefined> (undefined);
  
  function pokemonNumberInput(event: React.ChangeEvent<HTMLInputElement>){
    setPokemonNumber(event.target.value);
  }

  async function pokeSearchButton(){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

    try{
      let response = await fetch(url);
      let data = await response.json();
      setPokeData(data);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(()=> {
    pokeSearchButton()
  }, [pokemonNumber])

  return (
    <>

      <h2>Pokemon Search</h2>
      <input onChange={pokemonNumberInput} type="number"></input>

      {/* <button onClick={pokeSearchButton}>Search</button> */}
    
      {
        pokeData ? <PokeView data={pokeData}/> : <h3>Loading</h3>
      }
    </>
  )
}

export default PokeComponent