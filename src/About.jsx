import React from "react";
import Image from './resources/images/my.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const  About= () =>{
  return(
  <>
  <div class="details" id="about">
              <div class="left">
                  <div class="circle">
                      <img src={Image} alt="my pic"/>
                  </div>
              </div>
              <div class="right">
                  <h1>ATIF MOIN</h1>
                  <p>I am a Graphic Designer and WebDeveloper (Front End). I belong to Basti U.P.</p>
                  <h2>Contact Me:- </h2>
                  <div class="contacts">
  
                      <a href="https://www.instagram.com/_.a_ti_f._/" target="_blank">
                          <p>
                              <InstagramIcon/>
                            </p>
                      </a>
                      <a href="https://www.facebook.com/jsone.atif/" target="_blank">
                          <p><FacebookIcon/></p>
                      </a>
                      <a href="https://www.linkedin.com/in/atif-moin-858167179/" target="_blank">
                          <p><LinkedInIcon/></p>
                      </a>
                  </div>
              </div>
          </div>
    </>
  );
};

export default About;