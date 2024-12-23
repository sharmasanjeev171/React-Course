import { useState } from "react";
import styles from "./Item.module.css";
const Item = ({ foodItem, buyButtonHandle, selectedItem }) => {
  return (
    <li
      className={`list-group-item ${
        selectedItem.includes(foodItem) && "active"
      }`}
    >
      <span className={styles.span}>{foodItem}</span>
      <span>
        <button
          className={`${styles.buyButton} btn btn-info`}
          onClick={buyButtonHandle}
        >
          Buy
        </button>
      </span>
    </li>
  );
};
export default Item;
