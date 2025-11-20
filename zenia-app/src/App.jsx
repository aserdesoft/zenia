import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Farmacies from './pages/Farmacies'
import Documentation from './pages/Documentation'
import Entertainment from './pages/Entertainment'
import Funerals from './pages/Funerals'
import Food from './pages/Food'
import AboutUs from './pages/AboutUs'
import PlaceDetails from './pages/PlaceDetails'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farmacias" element={<Farmacies />} />
            <Route path="/farmacias/:id" element={<PlaceDetails />} />
            <Route path="/comida" element={<Food />} />
            <Route path="/comida/:id" element={<PlaceDetails />} />
            <Route path="/documentacion" element={<Documentation />} />
            <Route path="/documentacion/:id" element={<PlaceDetails />} />
            <Route path="/esparcimiento" element={<Entertainment />} />
            <Route path="/esparcimiento/:id" element={<PlaceDetails />} />
            <Route path="/funerales" element={<Funerals />} />
            <Route path="/funerales/:id" element={<PlaceDetails />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App