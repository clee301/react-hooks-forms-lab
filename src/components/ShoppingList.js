import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [addItem, setAddItem] = useState("Produce");
  const [itemName, setItemName] = useState("");




  function onItemFormSubmit(newItem){
    // event.preventDefault();

    // const newItem ={
    //   id: uuid(),
    //   name: itemName,
    //   category: addItem
    // };    
    console.log(newItem)
     setItems([...items, newItem])
    
  }


  function itemNameChange(event){
    setItemName(event.target.value);
    console.log(event.target.value)
  }

  function catChange(event){
    setAddItem(event.target.value);
    console.log(event.target.value)
  }

  function onSearchChange(event){
    setSearch(event.target.value);
    console.log(event.target.value)
  }
  
  const searchDisplay = items.filter((item) => {
    if (search === "") return true;

    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm addItem={addItem} onItemFormSubmit={onItemFormSubmit} itemName={itemName} itemNameChange={itemNameChange} catChange={catChange} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {searchDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;
