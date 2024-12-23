import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [foodItems, setFoodItems] = useState([]);
  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(newFoodItem);
    }
  };
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems foodItems={foodItems}></FoodItems>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
      </Container>
      {/* <Container>
        <p>Above is list of healthy food</p>
      </Container> */}
    </>
  );
}

export default App;
