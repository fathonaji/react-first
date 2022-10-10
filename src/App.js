import logo from "./logo.svg";
import "./App.css";
import Article from "./article/Article";
import UncontrolledForm from "./form/UncontrolledForm";
import ControlledForm from "./form/ControlledForm";
import FormInput from "./form/FormInput";
import FormBasicValidation from "./form/FormBasicValidation";
import PropsChecker from "./props/PropsChecker";
import Styling from "./styling/Styling";
import StatelessComponent from "./hook/StatelessComponent";
import ClassComponent from "./hook/ClassComponent";
import StatefullComponent from "./hook/StatefullComponent";
import Editing from "./state/Editing";
import CleanupChat from "./state/CleanUpChat";
import Component from "./state/RenderLoop";
import MindsetState from "./hook/MindsetState";
import Identity from "./hook/Identity";
import IdentityCallback from "./hook/IdentityCallback";
import IdentityMemo from "./hook/IdentityMemo";
import CounterReducer from "./reducer/CounterReducer";
import ToDo from "./reducer/Todo";
import ContextSample from "./context/ContextSample";
import { createContext } from "react";

let Theme = createContext("light");

function App() {
  // const userList = [
  //       { id: 1, name: 'Albert', gender: 'male' },
  //       { id: 2, name: 'Romy', gender: 'male' },
  //       { id: 3, name: 'Shinta', gender: 'female' },
  //       { id: 4, name: 'Hendra', gender: 'male' },
  //       { id: 5, name: 'Fenny', gender: 'female' },
  //       { id: 6, name: 'Desta', gender: 'male' },
  // ]

  const ui = (
    <div className="App">
      <Theme.Provider value={"light"}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Article author="anonim" />
          {/* <UncontrolledForm/> */}
          {/* <ControlledForm /> */}
          {/* <FormInput /> */}
          {/* <FormBasicValidation/> */}
          {/* <PropsChecker name="test" /> */}
          {/* <Styling /> */}
          {/* <StatelessComponent text="Test Button"/> */}
          {/* <ClassComponent text='Test Button' /> */}
          {/* <StatefullComponent text='Test Button' /> */}
          {/* <Editing value="test" /> */}
          {/* <CleanupChat /> */}
          {/* <Component/> */}
          {/* <MindsetState/> */}
          {/* <Identity/> */}
          {/* <IdentityCallback/> */}
          {/* <IdentityMemo region='jakarta'/> */}
          {/* <CounterReducer/> */}
          {/* <ToDo id={1} title="Belajar React" body="Belajar react sangat menyenangkan"/> */}
          <ContextSample />
        </header>
      </Theme.Provider>
    </div>
  );

  return ui;
}

export default App;
export { Theme };
