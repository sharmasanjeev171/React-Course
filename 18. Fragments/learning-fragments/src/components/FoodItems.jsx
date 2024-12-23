import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const handleClick = (item) => {
    let newItem = [...selectedItem, item];
    setSelectedItem(newItem);
  };
  return (
    <ul className="list-group">
      {foodItems?.map((item) => (
        <Item
          key={item}
          foodItem={item}
          buyButtonHandle={() => handleClick(item)}
          selectedItem={selectedItem}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
