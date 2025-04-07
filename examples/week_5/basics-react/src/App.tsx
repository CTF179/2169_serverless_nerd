import { Route, Routes } from "react-router-dom"
import ComponentOne from "./Components/ComponentOne/ComponentOne"
import EventsComponent from "./Components/Events/EventsComponent"
import ListComponent from "./Components/List/ListComponent"
import ParentComponent from "./Components/Props/ParentComponent/ParentComponent"
import NavBarComponent from "./Components/NavBar/NavBarComponent"
import StateComponent from "./Components/Hooks/StateComponent"
import SideEffectComponent from "./Components/Hooks/SideEffectComponent"
import PokeComponent from "./Components/PokeComponent/controller/PokeComponent"
import DashboardComponent from "./Components/Context/DashboardComponent"
import AppDemo from "./Components/Context/AppDemo"


function App() {

  return (
    <>
      {/* <ComponentOne/>
      <ComponentOne/>
      <EventsComponent/>
      <ListComponent/>
      <ParentComponent/> */}
      <NavBarComponent/>
      <AppDemo/>
      <Routes>
        <Route path="/" element={<ComponentOne/>}></Route>
        <Route path="/events" element={<EventsComponent/>}></Route>
        <Route path="/lists" element={<ListComponent/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
        <Route path="/state" element={<StateComponent/>}></Route>
        <Route path="/hooks" element={<StateComponent/>}></Route>
        <Route path="/effect" element={<SideEffectComponent/>}></Route>
        <Route path="/poke" element={<PokeComponent/>}></Route>
      </Routes>
    </>
  )
}

export default App
