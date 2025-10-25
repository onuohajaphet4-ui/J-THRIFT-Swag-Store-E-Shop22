
import"./App.css"
import Login from './page/Login'
import Home from './page/Home'
import Tour from './page/Tour'
import Card from './page/Card.jsx'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Navbar.jsx'
import Signup from './component/Signup.jsx'
function App() {
  

  return (
    <>
     <Nav/>
    <Routes>
      <Route path ="/" element={<Login/>}/>
      <Route path ="/Home" element={<Home/>}/>
      <Route path ="/tour" element={<Tour/>}/>
      <Route path ="/card" element={<Card/>}/>
      <Route path='/sign' element ={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
