import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const [currentSeconds, setCurrentSeconds] = useState("oof");
// const [currentMinutes, setCurrentMinutes] = useState("oof");
// const [currentHours, setCurrentHours] = useState("oof");

export default function App () {
const [currentSeconds, setCurrentSeconds] = useState(0);
const [currentMinutes, setCurrentMinutes] = useState(50);
const [currentHours, setCurrentHours] = useState(0);

useEffect (() => {
  setTimeout(() => {
    // if (currentSeconds === 59) {
    //   if (currentMinutes + 1 === 60) {
    //     setCurrentHours(currentHours + 1);
    //   }
    //   setCurrentSeconds(currentSeconds - currentSeconds);
    //   setCurrentMinutes(currentMinutes + 1);
    // } else if (currentMinutes === 59 && currentSeconds == 59) {
    //   setCurrentHours(currentHours + 1);
    //   setCurrentMinutes(currentMinutes-currentMinutes);
    // } else {
    //   setCurrentSeconds(currentSeconds + 1);
    // }
    
    if (currentMinutes > 0 && currentSeconds - 1 === -1) {
      setCurrentMinutes(currentMinutes - 1);
      setCurrentSeconds(59);
    } else if (currentSeconds > 0) {
      setCurrentSeconds(currentSeconds - 1);
    }
    

  }, 1000);
});

return (<>
  <div className = "timer">
    {('0' + currentHours).slice(-2)} : {('0' + currentMinutes).slice(-2)} : {('0' + currentSeconds).slice(-2)}
  </div>
  <div className = "timerEndMessage">
    {(currentMinutes === 0 && currentSeconds === 0) && "Time's Up"}
  </div>
</>);
}