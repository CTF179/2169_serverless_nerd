import React, { useState } from 'react'

function StateComponent() {

    // let [visibility, setVisibility] = useState(false);
    // let [counter, setCounter] = useState(0);

    let [state, setState] = useState({
        visibility: false,
        counter: 0
    })


    // let isVisible = false;

    function toggleDiv(){
        // console.log(isVisible);
        // isVisible = !isVisible;
        // setVisibility(!visibility);
        setState({...state, visibility: !state.visibility});
    }

  return (
    <>
        <button onClick={toggleDiv}>Toggle</button>
        {
            state.visibility ? <h2>Am I Visible</h2> : <></>
        }
        <br></br>
        <br></br>
        <br></br>
        <button onClick={() => setState({...state, counter: state.counter + 1})}>Increment</button>
        <button onClick={() => setState({...state, counter: state.counter - 2})}>Decrement</button>
        <h2>{state.counter}</h2>
    </>
  )
}

export default StateComponent