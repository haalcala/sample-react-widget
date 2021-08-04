import React from 'react';
import './App.css';

export interface AppProps {
  id:string
}

const App:React.FC<AppProps>= ({id}) => {
  const wrapper:HTMLElement|null = document.getElementById(id);

  const ownerData:any=wrapper? ((wrapper as HTMLDivElement).getAttribute("owner-data") as any) :"";

  const ownerHandler:any=wrapper? ((wrapper as HTMLDivElement).getAttribute("owner-handler") as any) :null;

  const handleClick=()=>{
    window.alert("Hello from the widget")
  }

  console.log("ownerData.ownerData:",ownerData.ownerData)
  console.log("ownerHandler:",ownerHandler)

  return (
    <div className="App">
      This is my sample plugin!<br/>
      ownerData: {ownerData} <br/>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={ownerHandler}>Trigger ownerHandler</button>
    </div>
  );
}

export default App;
