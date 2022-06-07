import Navbar from './components/navbar/navbar.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/homepage/homepage';
import Contact from './components/pages/contactpage/contactpage';
import Pricing from './components/pages/pricing/pricing';
function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/conference" element={<div>Conference</div>} />
        <Route path="/about_gwalior" element={<div>About Gwalior</div>} />
        <Route path="/guidelines" element={<div>Guidelines</div>} />
        <Route path="/schedule" element={<div>Schedule</div>} />
        <Route path="/important_dates" element={<div>Important Dates</div>} />
        <Route path="/advisory_memebers" element={<div>Advisory Memebers</div>} />
        <Route path="/registration" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
    </Router>
  );
}

export default App;
