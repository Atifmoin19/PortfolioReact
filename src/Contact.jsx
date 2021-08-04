import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

function Contact() {
    return (
        <section class="contact"  id="Feedback">
            <div class="contact_content">
                <h2>Feedback</h2>
                <p>Your Feedback is imp! to us if this PORTFOLIO need any kind of update kindely give us a message what it should be we are glad to listen from u......</p>
            </div>
            <div class="detailsc">
                <div class="contactinfo">
                    <div class="box">
                        <div class="icon"> <LocationOnIcon/> </div>
                            <div class="text">
                                <h3>Address</h3>
                                <p>Basti, UP<br/>Rafeeq Nagar Belwadandhi<br/>272001</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon"><PhoneIcon/> </div>
                            <div class="text">
                                <h3>Phone </h3>
                                <p>7007136187</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon"><EmailIcon/></div>
                            <div class="text">
                                <h3>Email</h3>
                                <p>atifmoin52@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="contactForm" id="feed">
                    <form method="POST" action="./php/backend_form.php">
                        <h2>Send Message</h2>
                        <div class="inputbox">
                            <input type="name" name="name"></input>
                            <span>Full Name</span>
                        </div>
                        <div class="inputbox">
                            <input type="email" name="email"/>
                            <span>Email</span>
                        </div>
                        <div class="inputbox">
                            <textarea name="message"></textarea>
                            <span>Type your Message...</span>
                        </div>
                        <div class="inputbox">
                            <input type="submit" name="sentbtn" value="Send"/>
        
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
