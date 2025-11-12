import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Farmacies from './pages/Farmacies'
import Documentation from './pages/Documentation'
import Entertainment from './pages/Entertainment'
import Funerals from './pages/Funerals'
import Food from './pages/Food'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farmacias" element={<Farmacies />} />
            <Route path="/comida" element={<Food />} />
            <Route path="/documentacion" element={<Documentation />} />
            <Route path="/esparcimiento" element={<Entertainment />} />
            <Route path="/funerales" element={<Funerals />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App