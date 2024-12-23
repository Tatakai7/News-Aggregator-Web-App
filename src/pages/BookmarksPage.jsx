import React, { useState, useEffect, useCallback } from 'react';
import NewsCard from '../components/NewsCard';

const BookmarksPage = () => {
    const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

    useEffect(() => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarkedArticles(bookmarks);
    }, []);

    const removeBookmark = useCallback((article) => {
        const updatedBookmarks = bookmarkedArticles.filter((item) => item.title !== article.title);
        setBookmarkedArticles(updatedBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }, [bookmarkedArticles]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Bookmarked Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookmarkedArticles.map((article, index) => (
                    <NewsCard key={index} article={article} onBookmark={removeBookmark} />
                ))}
            </div>
        </div>
    );
};

export default BookmarksPage;