import React from 'react';
import './Contact.css'



function Contact(){

    return(
        <div style={{padding:"50px 0"}}>

            <h2 className="primary_color font_25 text_center margin_tb">Qualifications</h2>
            <div className="contactContainer bd-grid ">
                <form method="post" className="contactForm" data-aos="zoom-in-up" action="mailto:nandi.munmun2015@gmail.com">

                    <input className="contactInput" type="text" placeholder="name"></input>

                    <input className="contactInput" type="Email" placeholder="email"></input>
                    <textarea className="contactInput" col="0" rows="10"></textarea>

                    <input className="contactSubmit"
                    type="submit" value="send email"></input>
                </form>




            </div>




        </div>

        
    )
}






export default Contact;