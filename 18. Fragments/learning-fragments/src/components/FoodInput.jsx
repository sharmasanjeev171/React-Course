import styles from "./FoodItems.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
};
export default FoodInput;
