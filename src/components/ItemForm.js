import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingList from "./ShoppingList";

function ItemForm({ onItemFormSubmit, itemNameChange, catChange }) {

  const [addItem, setAddItem] = useState("Produce");
  const [itemName, setItemName] = useState("");


  function handleSubmit(event){
    event.preventDefault();

    const newItem ={
      id: uuid(),
      name: itemName,
      category: addItem
    };   

    onItemFormSubmit(newItem)

  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setItemName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={addItem} onChange={(e) => setAddItem(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
