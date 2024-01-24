import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Favourite from './Favourite'
import { Route , Routes } from 'react-router-dom'
import MoviePage from './MoviePage'



const App = () => {
  let [theme, setTheme] = useState("light")
  return (
    <div >
      <Navbar themeObj = {{theme , setTheme}}></Navbar>

      <Routes>
    <Route path="/" element={<Home theme={theme}></Home>}></Route>
    <Route path="/favourite" element={<Favourite theme={theme}></Favourite>} ></Route>
    <Route path="/movie/:movieID" element={<MoviePage theme={theme}></MoviePage>}></Route>
      </Routes>
     
    
    </div>
  )
}

export default App