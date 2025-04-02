import React from 'react'

function EventsComponent() {

    function clickEventTriggered(){
        console.log("Click Button Triggered");
    }

    function hoverEventTriggered(){
        console.log("Hover Event Triggered");
    }

    function inputChanged(event: React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
    }

  return (
    <>
       <button onClick={clickEventTriggered}>Click Event</button> 
       <button onMouseOver={hoverEventTriggered}>Hover Event</button> 

       <input type="text" placeholder='Username' onChange={inputChanged}/>
    </>
  )
}

export default EventsComponent