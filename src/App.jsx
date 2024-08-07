
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Head from './components/Head'
import Footer from './components/Footer'

function App() {


  return (
   <>
    <Head />
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
    <Footer />
   </>
  )
}

export default App
