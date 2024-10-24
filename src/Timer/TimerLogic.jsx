import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';

import Countdown from './Countdown';

export default function TimerLogic (currentMinutes, currentSeconds, isStarted, isPaused, isFinished, updateMinsFunc, updateSecsFunc, updatePausedFunction, updateFinishedFunction, updateStartedFunction) {

const [seconds, setSeconds] = useState(currentMinutes);
const [minutes, setMinutes] = useState(currentSeconds);
const [paused, setPausedStatus] = useState(isPaused);
const [finished, setFinishedStatus] = useState(isFinished);
const [started, setStartedStatus] = useState(isStarted);

//Function takes care of the timer logic
function startTimer () { //Timer Begins Running Until 0 Minutes and 0 Seconds are left
    setTimeout(() => {  
        //Runs if the number of minutes left is > 0 and if 0 seconds are left
        if (minutes > 0 && seconds - 1 === -1) {
            setMinutes(minutes - 1);
            setSeconds(59);
        }
        //Runs if seconds is at least 1 
        else if (seconds > 0) {
            setSeconds(seconds - 1);
        } 
        //Runs if there are both 0 minutes and 0 seconds left on the timer
        else if (minutes === 0 && seconds === 0) {
            setFinishedStatus(true);
            setPausedStatus(false);
            return null;
        }
    }, 1000);
}


  function endTimer() {//Ends Timer
    setMinutes(0);
    setSeconds(0);
    setStartedStatus(false);
    setPausedStatus(false);
    setFinishedStatus(true);
  }

    //SETTING VARIABLES. USE INHERITANCE TO GET THE PARENT FUNCTION AND UPDATE VARIABLES
    if (isStarted && !isPaused && !isFinished) {startTimer();}
    if (isFinished) {endTimer();}
    //Passing as an object for some reason here
    console.log("Minutes:" + currentMinutes);
    console.log("Seconds: " + currentSeconds);

    //Error with these functions right here
    // updateMinsFunc(minutes);
    // updateSecsFunc(seconds);
    // updatePausedFunction(paused);
    // updateFinishedFunction(finished);
    // updateStartedFunction(started);
    return (<Countdown currentMinutes={minutes} currentSeconds={seconds}/>);
}