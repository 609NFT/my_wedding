import React from 'react';
import './App.css';
import logo from './h_b.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EnterSite from './pages/home'; // Adjust the path according to your project structure
import Venue from './pages/venue';
import Stay from './pages/stay';
import Weekend from './pages/weekend';
import Activities from './pages/activities';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p className="intro_text">
                <img src={logo} alt="Logo" className="hp_logo" />
                </p>
                <button>
                <Link to="/home" className="App-link">Enter Site</Link>
                </button>
            </header>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/stay" element={<Stay />} />
                <Route path="/venue" element={<Venue />} />
                <Route path="/weekend" element={<Weekend />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<EnterSite />} />
            </Routes>
        </Router>
    );
}

export default App;
