// client/src/App.js

import React from "react";
import logo from "./Snap logo.png";
import img1 from "./Orange Hood.jpeg";
import img2 from "./Blue Hood.jpeg";
import img3 from "./Green Hoodie.jpeg";
import "./App.css";
import ImageWithDescription from './Box';

const url = 'https://mirrorbackend.onrender.com';


function App() {
  const [info, setInfo] = React.useState(1);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/set/${info}`);
        console.log(response);
        // Handle the response if needed
      } catch (error) {
        // Handle any errors from the fetch request
        console.error('Error setting data:', error);
      }
    };
    fetchData();
  }, [info]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/get");
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };
    fetchData();
  }, []);

  const sendData = (n) => {
    setInfo(n);
    // fetch("/api/"+n);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt=""></img>
        <p className="App-sub"><b>Shopping Experiment</b></p>
        <div onClick={()=>{sendData(1)}}>
        <ImageWithDescription imageUrl={img1} description="Nike Orange Hoodie" subText="Sample info" />
        </div>
        <div onClick={()=>{sendData(2)}}>
        <ImageWithDescription imageUrl={img2} description="Nike Blue Hoodie" subText="Sample info" />
        </div>
        <div onClick={()=>{sendData(3)}}>
        <ImageWithDescription imageUrl={img3} description="Nike Green Hoodie" subText="Sample info" />
        </div>
        {/* <ImageWithDescription imageUrl={img1} description="Nike Orange Hoodie" subText="Orange Hoodie" onClick={setData(1)}/>
        <ImageWithDescription imageUrl={img1} description="Nike Orange Hoodie" subText="Orange Hoodie" onClick={setData(2)}/> */}
      </header>
    </div>
  );
}

export default App;