import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';


export default function TimerMessage({isStarted, isFinished, isPaused, currentMinutes, currentSeconds}) {
    return (<div className = "timerMessage">
        {(!isStarted && !isFinished) && `Not Started!`}
        {(isStarted && !isFinished && !isPaused) && `Currently Working!`}
        {(isPaused) && `Paused!`}
        {(currentMinutes === 0 && currentSeconds === 0 && isFinished) && `Timer Finished!`}
    </div>
    );
}