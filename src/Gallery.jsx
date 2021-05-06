import React from "react";
import Header from "./Header";
import Footer  from "./Footer";
import A from "./Images/A.jpg";
import B from "./Images/B.jpg";
import C from "./Images/C.jpeg";
import D from "./Images/D.jpeg";
import E from "./Images/E.jpeg";
import F from "./Images/F.jpeg";
import G from "./Images/G.jpeg";
const Gallery = () => {
    return (
        <div className="bg"> 
        <Header/>
        <div className="services" >
            <h1>Check Out What We're Currently Remodeling</h1>
            <div className="gallery">
                <img  className="img" src={A} alt="construction" /> 
                <img  className="img" src={B} alt="construction" />
                <img  className="img" src={C} alt="construction" />
                <img  className="img" src={D} alt="construction" />
                <img  className="img" src={E} alt="construction" /> 
                <img  className="img" src={F} alt="construction" />
               <img  className="img" src={G} alt="construction" /> 
              
            </div>
        </div>
      
        <Footer/>
       </div>
    )
}

export default Gallery;