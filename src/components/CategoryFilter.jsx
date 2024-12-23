import React from 'react';

const categories = ['Technology', 'Sports', 'Health', 'Business', 'Science', 'Entertainment'];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
    return (
        <div className="flex justify-center my-4 space-x-4">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
