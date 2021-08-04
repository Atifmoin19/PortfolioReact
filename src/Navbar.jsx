import React from "react";
import Image from "./resources/images/logo.png"

const  Navbar= () =>{
  return(

 <nav class="navbar">

<div class="element">
    <div class="logo"><img src={Image} alt=" logo"/></div>
    <div class="urls">
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#Feedback">Feedback</a>
        <a href="#My_Resume">My Resume</a>
    </div>
</div>
</nav>
  );
};

export default Navbar;