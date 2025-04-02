import { Route, Routes } from "react-router-dom"
import ComponentOne from "./Components/ComponentOne/ComponentOne"
import EventsComponent from "./Components/Events/EventsComponent"
import ListComponent from "./Components/List/ListComponent"
import ParentComponent from "./Components/Props/ParentComponent/ParentComponent"
import NavBarComponent from "./Components/NavBar/NavBarComponent"

function App() {

  return (
    <>
      {/* <ComponentOne/>
      <ComponentOne/>
      <EventsComponent/>
      <ListComponent/>
      <ParentComponent/> */}
      <NavBarComponent/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}></Route>
        <Route path="/events" element={<EventsComponent/>}></Route>
        <Route path="/lists" element={<ListComponent/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
      </Routes>
    </>
  )
}

export default App
