// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function InputBox({ color1, setColor1 }) {
  /*OR InputBox(props){ return( props.color, props.setColor1(event.target.value)}*/
  // const [color, setColor] = useState("green");
  return (
    <input
      type="text"
      style={{ backgroundColor: color1, color: "red" || color1 }} //The outer is used to describe as a variable dynamic of rect, while inner is used as an object;
      onChange={(event) => setColor1(event.target.value)}
      //We aent even using color as a paramter for = as well, setColor(value) is considered to be changing color;

      placeholder="Enter Color"
    ></input>
  );
}

function RectangleBox({ color1 }) {
  return (
    // <div></div>
    <div
      className="container"
      style={{
        //Double braces are used remembers one for  destructuring in JSX other one for object in JS;
        width: "150px",
        border: "1px solid",
        backgroundColor: color1,
        height: "20px",
        marginLeft: "22.5rem",
        marginTop: "2px",
      }}
    ></div>
  );
}

function App() {
  const [like, setLike] = useState(0);
  const [color, setColor] = useState("");
  const [colors, setColorlist] = useState([]);

  const [toggleColors, setToggleColors] = useState(true);

  var abc = () => {
    //colors is the array initially with blank, setColors is used to set the first parameter of Colors();
    if (color !== "") {
      return setColorlist([...colors, color]);
    }
  };
  // ...colors can only be used When first variable is a kind of array itself;
  //only then the color new addition can be added to the existing array, which can be extended;

  /* Do not use inline func for longer ones use external functions returning variable; */

  return (
    <div className="App">
      {/* //useState is like a hook here; 
      Anything inside useState(0) is used to initialise the variable; */}
      <button onClick={() => setLike(like + 1)}>
        Like👍 {like}
        {/* //Setlike is considered here that is used to change the state of the NUmber like here; */}
        {/* OnClick write something which evalauates to value, something which returns is called expression; */}
        {/* //Something defined here, in the onClick has to return, so onclick works only when setLIke(like+1) is returned as whole;
         */}
        {/* setLike is the function any action performed has to be returned onCLick for the dispatcher in hooks to work; */}
        {/* OnCLick need the setLike body for the setLIke 2nd Parameter of the State/hook; */}
      </button>
      {/* <input
          type="text"
          style={{ backgroundColor: color, color: "red" }}
          onChange={(event) => setColor(event.target.value)}
          placeholder="Enter Color"
        >
          {/* //inside {} curly braces is used to say that it is an object for the Javscript;}
        </input> */}
      <br />
      <InputBox color1={color} setColor1={setColor} />
      {/* <button onClick={() => setColorlist(colors.push(color))}>Add</button>   //Gives erroe callCallBack */}
      <button onClick={abc}>Add</button>{" "}
      {/*Call abc function when clicking and add color to colors array;*/}
      {/* Set Color is iherent;y conssidered that hey, it will be used to change the state of initial using the existing value, */}
      {/* or set the new value entirely w/o using the varaible even. */}
      <p>{colors.join(" ")}</p>
      <p>{color}</p>
      {/* //Hey when using ternary operator need not include braces again and again;*/}
      <button onClick={() => setToggleColors(!toggleColors)}>
        Toggle Colors
      </button>
      <p>{toggleColors + ""}</p>
      {/* ToggleCol variable willdecide of to vew map and Rectangle Box or not; */}
      {/* //Something which returns can only be used for cannot be used here;  */}
      {toggleColors ? colors.map((col) => <RectangleBox color1={col} />) : ""}
      {/* Map also returns new Array;*/}
      {/* //Anything other than HTML tag, ie variables used in useState() that you ant to write write inside {} only in react;*/}
      {/* <RectangleBox color1={color} /> //Called initially when calling jsut once this RectangleBox Component; */}
    </div>
  );
}

export default App;
