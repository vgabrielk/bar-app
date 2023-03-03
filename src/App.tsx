import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import SideBar from './components/SideBar'
import Pedidos from './pages/Pedidos'
import { useEffect } from 'react'
import Estoque from './pages/Estoque'
import Mesas from './pages/Mesas'
function App() {

  return (
    <div className='d-flex'>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/estoque' element={<Estoque />} />
          <Route path='/mesas' element={< Mesas />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
