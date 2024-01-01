
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Page/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import WatchHistory from './Page/WatchHistory'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<WatchHistory/>}/>
    </Routes>
    
    <Footer/>
    
    </>
  )
}

export default App
