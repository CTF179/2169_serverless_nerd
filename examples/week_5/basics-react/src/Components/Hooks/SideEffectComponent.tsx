import React, { useEffect, useState } from 'react'

function SideEffectComponent() {

    let [counter, setCounter] = useState(0);

    // useEffect
    // If we want to load something into the page when it opens up
    // Leave the useEffect hook empty in its array
    useEffect(() => {
        console.log("useEffect triggered");
    }, [])

    useEffect(() => {
        console.log(counter)
    }, [counter])


  return (
    <>
        <button onClick={() => {setCounter(++counter)}}>Change Counter</button>
    </>
  )
}

export default SideEffectComponent