import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [clickValue, setClickValue] = useState("");
  const onButtonClick = (e) => {
    if (e === "C") {
      setClickValue("");
    } else if (e === "=") {
      const result = eval(clickValue);
      setClickValue(result);
    } else {
      setClickValue(clickValue + e);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display clickValue={clickValue}></Display>
      <ButtonsContainer
        clickValue={clickValue}
        setClickValue={setClickValue}
        onButtonClick={onButtonClick}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
