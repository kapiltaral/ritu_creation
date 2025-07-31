import { Route, Routes } from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import SingleView from "./Component/SingleView"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/view/:id" element={<SingleView/>}/>
    </Routes>
      
    </>
  )
}

export default App
