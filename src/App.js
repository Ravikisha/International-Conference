import Navbar from './components/navbar/navbar.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/homepage/homepage';
import Contact from './components/pages/contactpage/contactpage';
import Pricing from './components/pages/pricing/pricing';
import ImportantDates from './components/pages/important_dates/important_dates';
import Schedule from './components/pages/schedule/schedule';
import Advisory from './components/pages/advisory_member/advisory_member';
import Conference from './components/pages/conference/conference';
function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/conference" element={<Conference />} />
        <Route path="/about_gwalior" element={<div>About Gwalior</div>} />
        <Route path="/guidelines" element={<div>Guidelines</div>} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/important_dates" element={<ImportantDates />} />
        <Route path="/advisory_memebers" element={<Advisory />} />
        <Route path="/registration" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
    </Router>
  );
}

export default App;
