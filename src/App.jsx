import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, ScrollToTop, SplashScreen } from './components';
import { About, ArticleOne, ArticleThree, ArticleTwo, Contact, Home, Partner, Solutions } from './pages'


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
          <Route path='/services-and-solutions' element={<Solutions />} />
          <Route path='/featured-articles-one' element={<ArticleOne />} />
          <Route path='/featured-articles-two' element={<ArticleTwo />} />
          <Route path='/featured-articles-three' element={<ArticleThree />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App