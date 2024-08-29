import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


//DO THIS IN TAILWIND CSS
export default function App () {
const [currentSeconds, setCurrentSeconds] = useState(0);
const [currentMinutes, setCurrentMinutes] = useState(0);
const [currentHours, setCurrentHours] = useState(0);
const [isPaused, setIsPaused] = useState(false);
const [isFinished, setIsFinished] = useState(false);
const [isStarted, setIsStarted] = useState(false);
const [chosenTime, setChosenTime] = useState(0);
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


useEffect(() => {
  if (isFinished) {
    setCurrentHours(0);
    setCurrentMinutes(0);
    setCurrentSeconds(0);
    setIsStarted(false);
    setIsFinished(true);
  }
});

useEffect (() => {
  setTimeout(() => {  
    if (isStarted && !isPaused && !isFinished) {
      if (currentMinutes > 0 && currentSeconds - 1 === -1) {
        setCurrentMinutes(currentMinutes - 1);
        setCurrentSeconds(59);
      } else if (currentSeconds > 0) {
        setCurrentSeconds(currentSeconds - 1);
      } else if (currentMinutes === 0 && currentSeconds === 0) {
        setIsFinished(true);
        setIsPaused(false);
      }
    }
  }, 10);
});

// useEffect(() => {
//   if (isFinished) {
//     setCurrentHours(0);
//     setCurrentMinutes(0);
//     setCurrentSeconds(0);
//     setIsStarted(false);
//     setIsFinished(true);
//     console.log(seconds);
//   }
// });


function startTimer () {
  if (currentMinutes !== 0) {
    setIsStarted(true);
    setIsPaused(false);
    setIsFinished(false);
  }
}



function chooseSelectedTime () {
  if (!isStarted) {
    let timerOption = document.getElementById("timerOptions");
    let totalTime = times.get(timerOption.value);
    console.log(totalTime);
    setCurrentHours(0);
    setCurrentMinutes(totalTime);
    setCurrentSeconds(0);
    console.log(currentSeconds)
    setIsStarted(false);
    setIsFinished(false);
    setIsPaused(false);
    setChosenTime(totalTime);
  }
}

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
  {/* {`Is Started: ${isStarted}, Is Paused: ${isPaused}, Is Finished: ${isFinished}`} */}
  <h1 className = "timerTitle">
    Work Timer
  </h1>
  <div className = "timer">
    {('0' + currentHours).slice(-2)} : {('0' + currentMinutes).slice(-2)} : {('0' + currentSeconds).slice(-2)}
  </div>
  
  <div className = "timerOptionsContainer">
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
    <button className = "chooseTime" onClick = {() => chooseSelectedTime()}>Select Time</button>
    <button className = "startButton" onClick = {() => startTimer()}>Start</button>
    <button className = "endButton" onClick = {() => setIsFinished(true)}>End</button>
    <button className = "pauseButton" onClick= {() => pauseTimer()}>Pause</button>
  </div>
  <div className = "timerEndMessage">
    {(currentMinutes === 0 && currentSeconds === 0 && isFinished && chosenTime >= 10) && `Time's Up! Set a Break Timer for ${chosenTime/5} Minutes!`}
    {(currentMinutes === 0 && currentSeconds === 0 && isFinished && chosenTime <= 5) && `Time's Up! Set a Break Timer for ${chosenTime/5} Minute!`}
  </div>
</>);
}