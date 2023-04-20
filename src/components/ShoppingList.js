import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return (
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchInputChange={handleSearchInputChange}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            search={searchQuery}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
