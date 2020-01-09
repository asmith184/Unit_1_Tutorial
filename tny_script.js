"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Aspen Smith
   Date:   1-6-19

*/

// runClock();
// setInterval("runClock()", 100);


// display the current date and time

document.getElementById("dateNow").innerHTML = "mm/dd/yyy <br/> hh:mm:ss";

// display the time left until new year's eve

document.getElementById("days").textContent = "DD";
document.getElementById("hrs").textContent = "HH";
document.getElementById("mins").textContent = "MM";
document.getElementById("secs").textContent = "SS";

var date = new Date("January 7, 2020 1:54:23");

var dateStr = date.toDateString();
var timeStr = date.toLocaleTimeString();

document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

var daysLeft = 365 - date.getDate();
var hrsLeft = 24 - date.getHours();
var minsLeft = 

document.getElementById("days").textContent = daysLeft;
document.getElementById("hrs").textContent = hrsLeft;

var height = Math.random();

function solver(){
   var area = height * length;

   return ;
}

console.log(solver());