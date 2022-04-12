import React from 'react';
import Skill from '../skills/Skill';
import "./Style.css" ;



function Specialization(){
    const skills=[
        {name:"html/css",
        description:"Hands-on experience in HTML and CSS",
        value:70,
        textColor:"#16c79a",
        pathColor:"#f2a154"},

        {name:"Javascript",
        description:"Hands-on experience in HTML and CSS",
        value:65,
        textColor:"#16c79a",
        pathColor:"#c84b31"},
        {name:"nodeJs",
        description:"Hands-on experience in HTML and CSS",
        value:60,
        textColor:"#16c79a",
        pathColor:"#4aa96c"},
        {name:"reactJs",
        description:"Hands-on experience in HTML and CSS",
        value:70,
        textColor:"#16c79a",
        pathColor:"#f2a154"},
        {name:"mongoDB",
        description:"Hands-on experience in HTML and CSS",
        value:60,
        textColor:"#16c79a",
        pathColor:"#4aa96c"},
        {name:"mySql",
        description:"Hands-on experience in HTML and CSS",
        value:50,
        textColor:"#16c79a",
        pathColor:"#2541b2"}

    ]

    return(


        <div className="container">
            <div className="card">
                <p className="primary_color font_14 text_center margin_tb">What I do</p>
                <p className="text_color_grey font_25 text_center" >Specializing in </p>
                <div className="flex_row wrap justify" data-aos= "fade-up">
                   {skills.map((i,index)=>(
                       <Skill 
                       key={index}
                       skillName={i.name}
                       description={i.description}
                       value={i.value}
                       textColor={i.textColor}
                       pathColor={i.pathColor}
                       
                       />

                   )

                   )}
                </div>
            </div>

        </div>
    )
}




export default Specialization;