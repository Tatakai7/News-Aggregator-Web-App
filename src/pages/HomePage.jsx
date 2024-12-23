import React, { useState, useEffect, useCallback } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Technology');
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchNews = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const endpoint = query
                ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
                : `https://newsapi.org/v2/top-headlines?category=${selectedCategory.toLowerCase()}&apiKey=${API_KEY}`;
            const response = await fetch(endpoint);
            const data = await response.json();
            if (data.status === 'error') {
                throw new Error(data.message);
            }
            setArticles(data.articles);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching news:', error);
        }
        setLoading(false);
    }, [query, selectedCategory]);

    useEffect(() => {
        fetchNews();
        const interval = setInterval(fetchNews, 300000); // Update every 5 minutes
        return () => clearInterval(interval);
    }, [fetchNews]);

    const handleBookmark = (article) => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        if (!bookmarks.some(bookmark => bookmark.url === article.url)) {
        localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, article]));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            <SearchBar onSearch={setQuery} />
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map((article, index) => (
                        <NewsCard key={index} article={article} onBookmark={handleBookmark} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;