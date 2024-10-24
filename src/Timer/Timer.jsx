import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';

import TimerTitle from './TimerTitle';
import TimerOptions from './TimerOptions';
import TimerMessage from './TimerMessage';
import TimerLogic from './TimerLogic';

export default function App () {
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [chosenTime, setChosenTime] = useState(0);

  //Figure out how to put the stuff below in another class and to call it to set it
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

  //Call these functions in the child class to update status here directly
  function setMinutesVar (updatedMins) {setCurrentMinutes(updatedMins);}

  function setSecondsVar (updatedSecs) {setCurrentSeconds(updatedSecs);}

  function setPausedVar(updatedPause) {setIsPaused(updatedPause);} 
  
  function setFinishedVar(updatedFinished) {setIsFinished(updatedFinished);} 

  function setStartVar(updatedStart) {setIsStarted(updatedStart);} 


  function chooseSelectedTime () {
    if (!isStarted) {
      let timerOption = document.getElementById("timerOptions");
      if (timerOption.value !== "timerDefaultMessage") {
        let totalTime = times.get(timerOption.value);
        // console.log(totalTime);
        setCurrentMinutes(totalTime);
        setCurrentSeconds(0);
        // console.log(currentSeconds);
        setIsStarted(false);
        setIsFinished(false);
        setIsPaused(false);
        // setChosenTime(totalTime);
      }
    }
  }




  return (<div className = "overallTimerContainer">
    
    <div className = "timerContainer">
    <div className = "timerInfo">
      <TimerTitle />
      
      {/* USE FUNCTIONS HERE AND CALL THEM IN TimerLogic to Update Everything */}

      {/* TEST CASE BELOW */}
      {/* {console.log(currentMinutes + " Minutes here")} */}
      <TimerLogic 
      
      currentMinutes = {currentMinutes} 
      currentSeconds = {currentSeconds} 
      isStarted = {isStarted} 
      isPaused = {isPaused} 
      isFinished = {isFinished}
      updateMinsFunc = {setMinutesVar}
      updateSecsFunc = {setSecondsVar}
      updatePausedFunction = {setPausedVar}
      updateFinishedFunction = {setFinishedVar}
      updateStartedFunction = {setStartVar}
      />
      <TimerOptions />
      <div className = "buttons">{/* BUTTON OPTIONS TO MAKE THE TIMER HAVE DIFFERENT FUNCTIONS*/}
        <button className = "timerButton chooseTime" onClick = {() => chooseSelectedTime()}>Set Time</button>
        <button className = "timerButton startButton" onClick = {() => setIsStarted(true)}>Start</button>
        <button className = "timerButton endButton" onClick = {() => setIsFinished(true)}>End</button>
        <button className = "timerButton pauseButton" onClick= {() => setIsPaused(true)}>Pause</button>
      </div>
      <TimerMessage 
      isStarted = {isStarted} 
      isFinished = {isFinished} 
      isPaused = {isPaused} 
      currentMinutes = {currentMinutes} 
      currentSeconds = {currentSeconds}
      />
    </div>
  </div>
  </div>);
}