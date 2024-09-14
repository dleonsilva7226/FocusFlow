import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';


export default function Countdown ({currentMinutes,currentSeconds}) {
    return (
        <div className = "timerDisplay">
            {('0' + currentMinutes).slice(-2)} : {('0' + currentSeconds).slice(-2)}
        </div>
    );
}

