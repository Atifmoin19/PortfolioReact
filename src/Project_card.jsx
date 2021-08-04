import React from 'react'

function Project_card({Imageurl,Heading,posturl}) {

    return (
        <div class="card pr1">
                        <div class="image">
                            <img src={Imageurl} alt="Pr1"/>
                        </div>
                        <div class="pr_details">
                            <h2>{Heading}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi placeat dignissimos
                                doloremque dolorem ut? Aliquid voluptatibus necessitatibus earum ab.</p>
                        </div>
                        <a 
                        href={posturl}  target="_blank">
                        <div class="btn">
                            Link
                         </div>
                        </a>
         </div>
    )
}

export default Project_card;
