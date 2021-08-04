import React from 'react'
import Projectcard from './Project_card'
import i1 from './resources/images/pr1.jpg';
import i2 from './resources/images/pr2.jpg';
import i3 from './resources/images/pr3.jpg';
import i4 from './resources/images/pr4.jpg';
import i5 from './resources/images/pr5.jpg';
import i6 from './resources/images/pr6.jpg';
import i7 from './resources/images/pr7.jpg';
import i8 from './resources/images/pr8.jpg';

function Project() {
    return (
     <div class="projects" id="projects">
        <h1>Projects</h1>
            <div class="project_details">
               <div class="row1">
                    <Projectcard posturl="https://atifmoin19.github.io/Live-char-counter/" Imageurl={i1} Heading="Live Counter"/>
                    <Projectcard posturl="https://atifmoin19.github.io/MusicPlayer/" Imageurl={i2} Heading="Music Player"/>
                    <Projectcard posturl="https://atifmoin19.github.io/netflix/" Imageurl={i3} Heading="Netflix and Chill"/>
                    <Projectcard posturl="https://atifmoin19.github.io/omnifood/" Imageurl={i4} Heading="Omini Food"/>
               </div>
               <div class="row1">

                    <Projectcard posturl="https://atifmoin19.github.io/resturant-site/" Imageurl={i5} Heading="GM Foods"/>
                    <Projectcard posturl="https://atifmoin19.github.io/E-commers-site/Mysite/indext.html" Imageurl={i6} Heading="RedStore"/>
                    <Projectcard posturl="https://atifmoin19.github.io/project/main.html?" Imageurl={i7} Heading="FullWebsite"/>
                    <Projectcard posturl="https://atifmoin19.github.io/card-hover-animation/" Imageurl={i8} Heading="Glassmorphism"/>
                <div/>
            </div>
        </div>
    </div>

    )
}

export default Project
