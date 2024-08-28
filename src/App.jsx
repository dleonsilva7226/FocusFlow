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
const [currentMinutes, setCurrentMinutes] = useState(0);
const [currentHours, setCurrentHours] = useState(0);
const [isPaused, setIsPaused] = useState(false);
const [isFinished, setIsFinished] = useState(false);
const [isStarted, setIsStarted] = useState(false);
const times = new Map([
  ["fifty", 50],
  ["fortyFive", 45],
  ["forty", 40],
  ["thirtyFive", 35],
  ["thirty", 30],
  ["twentyFive", 25],
  ["twenty", 20],
  ["fifteen", 15],
  ["ten", 10],
  ["five", 5]
]);
// const [isRestarted, setIsRestarted] = useState(false);

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
    // if (isRestarted) {
    //     setIsStarted(false);
    //     setIsFinished(false);
    //     setIsPaused(false);
    //     setIsRestarted(false);
    //     setCurrentHours(0);
    //     setCurrentMinutes(0);
    //     setCurrentSeconds(0);
    // } else 
    
    if (isStarted && !isPaused && !isFinished) {
      if (currentMinutes > 0 && currentSeconds - 1 === -1) {
        setCurrentMinutes(currentMinutes - 1);
        setCurrentSeconds(59);
      } else if (currentSeconds > 0) {
        setCurrentSeconds(currentSeconds - 1);
      } else {
        setIsFinished(true);
      }
    }
  }, 10);
});

useEffect(() => {
  if (!isStarted) {
    let timerOption = document.getElementById("timerOptions");
    let totalTime = times.get(timerOption.value);
    setCurrentHours(0);
    setCurrentMinutes(totalTime);
    setCurrentSeconds(0);
  }
});

function startTimer () {
  setIsStarted(true);
  setIsPaused(false);
  setIsFinished(false);
}

function endTimer () {
  setCurrentHours(0);
  setCurrentMinutes(0);
  setCurrentSeconds(0);
  setIsStarted(false);
  setIsFinished(true);
}

function pauseTimer() {
  if (isStarted && !isFinished) {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    } 
  }
}



return (<>
  {`Is Started: ${isStarted}, Is Paused: ${isPaused}, Is Finished: ${isFinished}`}
  
  <div className = "text-3xl font-bold underline">
    {('0' + currentHours).slice(-2)} : {('0' + currentMinutes).slice(-2)} : {('0' + currentSeconds).slice(-2)}
  </div>
  <div className = "timerOptions">
    <select id = "timerOptions">
      <option value = "fifty"> 50 Minutes</option>
      <option value = "fortyFive">45 Minutes</option>
      <option value = "forty">40 Minutes</option>
      <option value = "thirtyFive">35 Minutes</option>
      <option value = "thirty">30 Minutes</option>
      <option value = "twentyFive">25 Minutes</option>
      <option value = "twenty">20 Minutes</option>
      <option value = "fifteen">15 Minutes</option>
      <option value = "ten">10 Minutes</option>
      <option value = "five">5 Minutes</option>
    </select>
  </div>
  <div className = "buttons">
    <button className = "startButton" onClick = {() => startTimer()}>Start Button</button>
    <button className = "endButton" onClick = {() => endTimer()}>End Button</button>
    <button className = "pauseButton" onClick= {() => pauseTimer()}>Pause Button</button>
    {/* <button className = "restartButton" onClick = {() => setIsRestarted(true)}>Restart Button</button> */}
  </div>
  <div className = "timerEndMessage">
    {(currentMinutes === 0 && currentSeconds === 0 && isFinished) && "Time's Up! Take a 10 Minute Break!"}
  </div>
</>);
}