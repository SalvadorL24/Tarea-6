const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  window.CategoryFilter = CategoryFilter;   