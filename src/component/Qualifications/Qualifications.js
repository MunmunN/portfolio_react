import React from 'react';
import images from '../../images/work1.jpg';



function Qualifications(){

    return(
        <div className="container" style={{padding:"50px 0"}}>
            <h2 className="primary_color font_25 text_center margin_tb">Qualifications</h2>
            <h1 className="text_color_grey text_center margin_tb">My Education</h1>
            <div className="flex_row flex_col align_center justify" style={{margin:"50px 0px"}}>
                <div data-aos="fade-up-right">
                    {/* this div include image and hire me and download CV button */}

                    {/* IMAGE CODE */}
                    <img src={images} width="400px" alt="code pic"/>

                    {/* BUTOON CODE */}
                    <div style={{marginTop:"20px",
                                padding:"10px", boxSizing:"border-box", display:"flex" ,justifyContent:"center", borderRadius:"20px"}}>
                        {/* Button 1 */}
                        <div>
                        <a  className="hireme_button" href="">Hire Me</a> 
                        </div>
                        {/* Button 2 */}
                        
                        <div>
                        <a className="download_button margin_lr">Download CV</a>
                        </div>



                    </div>


                </div>
                <div>
                    <div data-aos="zoom-in-up" className="margin_tb" style={{background:"white", padding:"20px", width:"300px"}}>
                        <p className="primary_color font_14 margin_tb" >
                            Diploma in Computer Programming 

                        </p>
                        <p className="text_color_grey font_14 margin_tb">2018-2020</p>
                        <p className="text_color_grey font_12 margin_tb">I created various projects with java, node.js angular react and mongoDb and sql.</p>


                    </div>
                    <div data-aos="zoom-in-up" className="margin_tb" style={{background:"white", padding:"20px", width:"300px"}}>
                        <p className="primary_color font_14 margin_tb" >
                            Diploma in Computer Programming 

                        </p>
                        <p className="text_color_grey font_14 margin_tb">2018-2020</p>
                        <p className="text_color_grey font_12 margin_tb">I created various projects with java, node.js angular react and mongoDb and sql.</p>


                    </div>
                    <div data-aos="zoom-in-up" className="margin_tb" style={{background:"white", padding:"20px", width:"300px"}}>
                        <p className="primary_color font_14 margin_tb" >
                            Diploma in Computer Programming 

                        </p>
                        <p className="text_color_grey font_14 margin_tb">2018-2020</p>
                        <p className="text_color_grey font_12 margin_tb">I created various projects with java, node.js angular react and mongoDb and sql.</p>


                    </div>
                </div>


            </div>


        </div>
    )
}






export default Qualifications;