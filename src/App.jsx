import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const [currentSeconds, setCurrentSeconds] = useState("oof");
// const [currentMinutes, setCurrentMinutes] = useState("oof");
// const [currentHours, setCurrentHours] = useState("oof");


//DO THIS IN TAILWIND CSS
export default function App () {
const [currentSeconds, setCurrentSeconds] = useState(0);
const [currentMinutes, setCurrentMinutes] = useState(50);
const [currentHours, setCurrentHours] = useState(0);

const [isPaused, setIsPaused] = useState(false);
const [isFinished, setIsFinished] = useState(false);
const [isStarted, setIsStarted] = useState(false);
const [isRestarted, setIsRestarted] = useState(false);

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
    if (isRestarted) {
        setIsStarted(false);
        setIsFinished(false);
        setIsPaused(false);
        setIsRestarted(false);
        setCurrentHours(0);
        setCurrentMinutes(50);
        setCurrentSeconds(0);
    }
    else if (isFinished) {
      setCurrentHours(0);
      setCurrentMinutes(0);
      setCurrentSeconds(0);
    } else if (isStarted && !isPaused) {
      if (currentMinutes > 0 && currentSeconds - 1 === -1) {
        setCurrentMinutes(currentMinutes - 1);
        setCurrentSeconds(59);
      } else if (currentSeconds > 0) {
        setCurrentSeconds(currentSeconds - 1);
      }
    }
  }, 1000);
});

function pauseTimer() {
  if (isStarted) {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    } 
  }
}



return (<>
  <div className = "timer">
    {('0' + currentHours).slice(-2)} : {('0' + currentMinutes).slice(-2)} : {('0' + currentSeconds).slice(-2)}
  </div>
  <div className = "buttons">
    <button className = "startButton" onClick = {() => setIsStarted(true)}>Start Button</button>
    <button className = "endButton" onClick = {() => setIsFinished(true)}>End Button</button>
    <button className = "pauseButton" onClick= {() => pauseTimer()}>Pause Button</button>
    <button className = "restartButton" onClick = {() => setIsRestarted(true)}>Restart Button</button>
  </div>
  <div className = "timerEndMessage">
    {(currentMinutes === 0 && currentSeconds === 0) && "Time's Up"}
  </div>
</>);
}