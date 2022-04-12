import React from 'react';
import "./Projects.css";
import images1 from '../../images/Project_1.JPG';
import images2 from '../../images/Project_2_chatApp.JPG';



function Projects(){
    return(
        <div className="container" style={{marginTop:"50px",marginBottom:"50px"}} data-aos="zoom-in-up">
            <p className="text_color_grey font_25 text_center" >Latest Project </p>
            <div className="card flex_row flex_col justify" style={{border:"3px solid black", backgroundColor:"black"}} >
                 
                <div className="projectContainer">
                    <h1 className="primary_color">e-commerce website</h1>
                    <div>
                    <a className="hireme_button margin_tb" href="https://github.com/MunmunN/E-store">Project Link</a>
                    </div>
                </div>
                <div className="projectImageContainer">
                <img src={images1} alt="code image" />
                

                </div>

                
            </div>
            <div className="card flex_row flex_col justify" style={{border:"3px solid orange", backgroundColor:"black"}}>
                 
                <div className="projectContainer">
                    <h1 className="primary_color">chatApp</h1>
                    <div>
                    <a className="hireme_button margin_tb" href="">Project Link</a>
                    </div>
                </div>
                <div className="projectImageContainer">
                <img src={images2} alt="code image" />
                

                </div>
            </div>

         </div>


            


       
    )
}

export default Projects;