import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';

import Countdown from './Countdown';

export default function TimerLogic (currentMinutes, currentSeconds, isStarted, isPaused, isFinished) {

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

    //SETTING VARIABLES

    if (started && !paused && !finished) {startTimer();}
    if (finished) {endTimer();}
    return (<Countdown currentMinutes={minutes} currentSeconds={seconds}/>);
}