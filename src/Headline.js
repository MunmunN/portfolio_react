import React from 'react';
import images from './images/code.png';
import "./Headline.css"


function Headline(){
    return(
        <div className="container" style={{marginTop:"70px"}}>
            <div class="flex_row flex_col justify align_center" >
            <div data-aos="fade-right">
            <h2 className="text_color uppercase">Hello,  I am Munmun Nandi</h2>
            <h2 className="primary_color font_40 margin_tb">Fullstack Developer</h2>
            <div className="flex_row" style={{marginTop:"30px"}}>
            <a  className="hireme_button" href="">Hire Me</a>
            <a className="download_button margin_lr" >Download CV</a>
            </div>

         </div>
            <div data-aos="fade-left">
                <div className="image_container">
                <img src={images} alt="code image" />

                </div>
           


            </div>
        </div>

            
           
            
          

        </div>
    )
}

 export default Headline;

