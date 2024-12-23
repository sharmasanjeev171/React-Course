import styles from "./Display.module.css";
const Display = ({ clickValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={clickValue}
      readOnly
    ></input>
  );
};
export default Display;
