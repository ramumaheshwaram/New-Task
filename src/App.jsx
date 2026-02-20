import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Home-components/Home.jsx'
import { Header } from './components/Header.jsx'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
