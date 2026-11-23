function SearchBar({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortChange,
  onClear,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="School Supplies">School Supplies</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Default</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>

      <button onClick={onClear}>Clear Filters</button>
    </div>
  );
}

export default SearchBar;