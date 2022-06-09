import Navbar from './components/navbar/navbar.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contact from './components/pages/contactpage/contactpage';
import Pricing from './components/pages/pricing/pricing';
import ImportantDates from './components/pages/important_dates/important_dates';
import Schedule from './components/pages/schedule/schedule';
import Advisory from './components/pages/advisory_member/advisory_member';
import Conference from './components/pages/conference/conference';
import Guidelines from './components/pages/guideline/guideline';
import NotFound from './components/pages/notfound/notfound';
import AboutGwalior from './components/pages/about_gwalior/about_gwalior';
import Home from './components/pages/home/home';
function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/conference" element={<Conference />} />
        <Route path="/about_gwalior" element={<AboutGwalior />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/important_dates" element={<ImportantDates />} />
        <Route path="/advisory_memebers" element={<Advisory />} />
        <Route path="/registration" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </Router>
  );
}

export default App;
