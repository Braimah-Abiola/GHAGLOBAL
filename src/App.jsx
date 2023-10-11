import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, ScrollToTop, SplashScreen } from './components';
import { Home } from './pages'

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
        </Routes>
      </div>
    </Router>
  )
}

export default App