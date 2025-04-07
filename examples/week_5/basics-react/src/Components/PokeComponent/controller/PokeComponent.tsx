import React, { useEffect, useState } from 'react'
import PokeView from '../view/PokeView';
import { Pokemon } from '../model/Pokemon';
import PokeSearchComponent from './PokeSearchComponent';

function PokeComponent() {

  let [pokemonNumber, setPokemonNumber] = useState<string|undefined>(undefined);

  let [pokeData, setPokeData] = useState<Pokemon | undefined> (undefined);
  
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
      <PokeSearchComponent setPokemonNumber={setPokemonNumber}/>
      {
        pokeData ? <PokeView data={pokeData}/> : <h3>Loading</h3>
      }
    </>
  )
}

export default PokeComponent