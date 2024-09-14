import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';

export default function TimerOptions () {
    return (
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
      

    );
}

