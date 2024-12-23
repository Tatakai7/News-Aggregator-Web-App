import React from 'react';

const NewsCard = ({ article, onBookmark }) => {
    return (
        <div className="border rounded-lg p-4 mb-4 shadow-lg bg-white">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded" />}
            <p className="mt-2">{article.description}</p>
            <div className="mt-4 flex justify-between">
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Read more
                </a>
                <button
                    onClick={() => onBookmark(article)}
                    className="text-sm text-white bg-blue-600 px-3 py-1 rounded"
                >
                    Bookmark
                </button>
            </div>
        </div>
    );
};

export default NewsCard;
