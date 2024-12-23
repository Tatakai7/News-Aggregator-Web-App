import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';

function App() {
    return (
        <Router>
            <div className="bg-gray-100 min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/bookmarks" element={<BookmarksPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
