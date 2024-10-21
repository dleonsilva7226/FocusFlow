import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';



export default function TimerButtonOptions () {
    return (
    <div className = "buttons">
        <button className = "timerButton chooseTime" onClick = {() => chooseSelectedTime()}>Set Time</button>
        <button className = "timerButton startButton" onClick = {() => startTimer()}>Start</button>
        <button className = "timerButton endButton" onClick = {() => setIsFinished(true)}>End</button>
        <button className = "timerButton pauseButton" onClick= {() => pauseTimer()}>Pause</button>
    </div>
    );
}