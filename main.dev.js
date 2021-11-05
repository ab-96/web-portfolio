"use strict";

// nav toggle - select button and links
var navToggle = document.querySelector("#navToggle");
var nav = document.querySelector("#nav-links"); // add event listener

navToggle.addEventListener("click", function () {
  nav.classList.toggle('nav-open');
});