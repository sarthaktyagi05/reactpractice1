import React from "react";
import ReactDOM from "react-dom/client";


const Tittle=()=>(<h1>Episode3 🐱‍👓</h1>);

/* component compositions */
const Heading=()=>{ 
  return <div id="container">
    
    <Tittle/>   
    <h1 id="heading">functional component in react</h1>
  </div>;
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
