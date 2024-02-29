import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemo from "./exercises/ContextDemo";
import ContextDemoApp from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <Propsdemo title="Props Demo" /> : null}
            {selectedView == "listdemo1" ? <ListDemo title="List Demo" /> : null}
            {selectedView == "eventdemo1" ? <EventDemo1 title="Event Demo" /> : null}
            {selectedView == "formuncontrolled" ? <FormUncontrolled title="Uncontrolled Form" /> : null}
            {selectedView == "statedemo" ? <StateDemo1 title="State Demo1" /> : null}
            {selectedView == "statedemo2" ? <StateDemo2 title="State Demo2" /> : null}
            {selectedView == "statedemo3" ? <StateDemo3 title="State Demo3" /> : null}
            {selectedView == "useeffect" ? <UseEffect title="Use Effect" /> : null}
            {selectedView == "fetchdemo" ? <FetchDemo title="Fetch Demo" /> : null}
            {selectedView == "liftingstate" ? <LiftingState title="Lifting State" /> : null}
            {selectedView == "contextdemo" ? <ContextDemoApp title="Context Demo" /> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("listdemo1")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("eventdemo1")}>
        Event Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("formuncontrolled")}>
        User Form
      </button>
      <button className="btn-w100" onClick={() => handleSelected("statedemo")}>
        State Demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("statedemo2")}>
        State Demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("statedemo3")}>
        State Demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useeffect")}>
        Use Effect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetchdemo")}>
        Fetch Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("liftingstate")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("contextdemo")}>
        Context Demo
      </button>
    </>
  );
};
