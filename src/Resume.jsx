import React from 'react'
import Pdf from './resources/pdf/resume.pdf'
import Image from './resources/images/res.jpg'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';

function Resume() {
    return (
        <section class="My_Resume" id="My_Resume">
        <div class="card2">
        <div class="imagecard2">
            <img src={Image} alt=""/>
        </div>
        <div class="buttons">
            <a href={Pdf} target="_blank">
        <div class="view btn" >
             <VisibilityIcon/>
        </div>
        </a>
        <a href="https://atifmoin19.github.io/PORTFOLIO/resources/pdf/resume.pdf">
        <div class="download btn">
        <GetAppIcon></GetAppIcon>
        </div>
        </a>
        </div>
        </div>
        
                </section>
    )
}

export default Resume;
