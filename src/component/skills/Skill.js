import React from 'react';
import "./Style.css";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'



function Skill(props){


    return(
        <div class="flex_row align_center margin_tb" >
            <div className="skillContainer">
                 <CircularProgressbar value={props.value} text={`${props.value}%`} styles={buildStyles({pathColor:props.pathColor, textColor:props.textColor})}/>          

            </div>
            <div className="margin_lr">
                <p className="text_color_grey font_16 margin_tb">{props.skillName}</p>
                <p className="text_color_grey font_14 margin_tb">{props.description}</p>


            </div>
        </div>



            
            

        
        
        


        
    )

}


export default Skill;
