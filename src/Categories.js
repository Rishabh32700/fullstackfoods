import React, { useState } from 'react';

const Categories = ({ categories, filterItems }) => {
  let [currentCategory, setCurrentCategory] = useState(0);

  const handleCategoryClick = (categoryIndex, category) => {
    filterItems(category);
    setCurrentCategory(categoryIndex);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${
              index === currentCategory ? 'active' : ''
            }`}
            key={index}
            onClick={() => handleCategoryClick(index, category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
