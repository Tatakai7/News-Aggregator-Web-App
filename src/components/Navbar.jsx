import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">News Aggregator</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/bookmarks" className="hover:underline">Bookmarks</Link>
            </div>
        </div>
    );
};

export default Navbar;