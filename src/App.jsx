import { useEffect, useState } from 'react'
import React from 'react';
import './Timer/styles.css';

import './Timer/TimerOptions';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

export default function App () {
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [chosenTime, setChosenTime] = useState(0);
  // Set Break and Working Time Message Logic
  const [isBreak, setIsBreak] = useState(false);
  const [isWorking, setIsWorking] = useState(false);

  //Figure out how to put the stuff below in another class
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
    ["nine", 9],
    ["eight", 8],
    ["seven", 7],
    ["six", 6],
    ["five", 5],
    ["four", 4],
    ["three", 3],
    ["two", 2],
    ["one", 1]
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
    }, 1000);
  });

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
      if (timerOption.value !== "timerDefaultMessage") {
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

  return (<div className = "overallTimerContainer">
    <div className = "timerContainer">
    <div className = "timerInfo">
      {/* {`Is Started: ${isStarted}, Is Paused: ${isPaused}, Is Finished: ${isFinished}`} */}
      <div className = "timerTitle">
        Focus Timer
      </div>
      <div className = "timerDisplay">
        {/* {('0' + currentHours).slice(-2)} :  */}
        {('0' + currentMinutes).slice(-2)} : {('0' + currentSeconds).slice(-2)}
      </div>
      
      <div className = "timerOptionsContainer">
        <select id = "timerOptions">
          <option value = "timerDefaultMessage">--Choose Time Below--</option>
          <option value = "fifty"> 50 Minutes</option>
          <option value = "fortyFive">45 Minutes</option>
          <option value = "forty">40 Minutes</option>
          <option value = "thirtyFive">35 Minutes</option>
          <option value = "thirty">30 Minutes</option>
          <option value = "twentyFive">25 Minutes</option>
          <option value = "twenty">20 Minutes</option>
          <option value = "fifteen">15 Minutes</option>          
          <option value = "ten"> 10 Minutes</option>
          <option value = "nine">9 Minutes</option>
          <option value = "eight">8 Minutes</option>
          <option value = "seven">7 Minutes</option>
          <option value = "six">6 Minutes</option>
          <option value = "five">5 Minutes</option>
          <option value = "four">4 Minutes</option>
          <option value = "three">3 Minutes</option>
          <option value = "two">2 Minutes</option>
          <option value = "one">1 Minute</option>
        </select>
      </div>
      <div className = "buttons">
        <button className = "timerButton chooseTime" onClick = {() => chooseSelectedTime()}>Set Time</button>
        <button className = "timerButton startButton" onClick = {() => startTimer()}>Start</button>
        <button className = "timerButton endButton" onClick = {() => setIsFinished(true)}>End</button>
        <button className = "timerButton pauseButton" onClick= {() => pauseTimer()}>Pause</button>
      </div>
      <div className = "timerMessage">
        {(!isStarted && !isFinished) && `Not Started!`}
        {(isStarted && !isFinished && !isPaused) && `Currently Working!`}
        {(isPaused) && `Paused!`}
        {(currentMinutes === 0 && currentSeconds === 0 && isFinished) && `Set a Break Timer!`}
        {/* {(currentMinutes === 0 && currentSeconds === 0 && isFinished && chosenTime <= 5) && `Time's Up! Set a Break Timer for ${chosenTime/5} Minute And Then Start Working!`} */}
      </div>
    </div>
  </div>
  </div>);
}