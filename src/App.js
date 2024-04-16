import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EnterSite from './pages/home'; // Adjust the path according to your project structure

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p className="intro_text">
                    Hope & Brian
                </p>
                <Link to="/home" className="App-link">Enter Site</Link>
            </header>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<EnterSite />} />
            </Routes>
        </Router>
    );
}

export default App;
