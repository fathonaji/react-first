import { useContext } from "react";
import { Theme } from "../App";
import { useBoolean } from "../custom/CustomHook";

const ContextSample = () => {
  const theme = useContext(Theme);
  const [isToggle, { setToggle, setTrue, setFalse }] = useBoolean(true);
  const ui = (
    <div>
      <span>Theme: {theme}</span>
      <div>
        <p>Lamp Status: {isToggle ? "true" : "false"}</p>
        <button
          onClick={(e) => {
            console.log("milik");
            setToggle();
          }}
        >
          Saklar Lampu
        </button>
        <button
          onClick={(e) => {
            setFalse();
          }}
        >
          Matikan Lampu
        </button>
        <button
          onClick={(e) => {
            setTrue();
          }}
        >
          Nyalakan Lampu
        </button>
      </div>
    </div>
  );

  return ui;
};

export default ContextSample;
