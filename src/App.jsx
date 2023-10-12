import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, ScrollToTop, SplashScreen } from './components';
import { About, Contact, Home, Partner } from './pages'

const App = () => {
  return (
    <Router>
      <div className="">
        <SplashScreen />
        <Navbar />
      </div>

      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients-and-partners" element={<Partner />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App