import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Ensure dark theme is maintained
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = '#000000';
  }, []);

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;