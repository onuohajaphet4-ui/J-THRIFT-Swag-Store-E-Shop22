
import"./App.css"
import Home from './page/Home'
import Tour from './page/Tour'
import Card from './page/Card.jsx'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Navbar.jsx'
function App() {
  

  return (
    <>
     <Nav/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/tour" element={<Tour/>}/>
      <Route path ="/card" element={<Card/>}/>
    </Routes>
    </>
  )
}

export default App
