import { useEffect, useState } from 'react'
import React from 'react';
import './styles.css';

function TimerOptions () {
    return (<>
    {new Map([
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
  ])}
  </>);
}

export default TimerOptions;