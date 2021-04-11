import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import saving from "./Images/saving.svg";
import beautiful from "./Images/beautiful.svg";
import long from "./Images/long.svg";
import trust from "./Images/trust.svg";
import support from "./Images/support.svg";

import Logo from "./Logo";

const Home = () => {
    return (
        <div className="bg"> 
        <div className="sidebyside"> 
       
   
            
         </div>     
            <Header/>
         
            <div className="horizontal-col">
               <div className="help-text textt"> 
              
                  <p> Thank you for visiting us at Edmond Enterprises, LLC. We're a full-service home repair, remodeling
                  and maintenance company.</p>
                  <br></br>
                  <p> Let us help you with your full or partial kitchen and bath remodels. Or if you need help installing a 
                     new appliance, like that stove in your new kitchen, give us a call. Or if you need aid doing some garden work,
                     don't worry, we got your back. 
                  </p> 
               </div>
               <div > 
                  <p className="help">Let us help you.  </p>
               </div>
            </div>

          <div className="horizontal">
             <p className="text"> Edmond Enterprises only has one goal: 
             <br></br>
             to provide top-quality services at fair prices. We strive for perfection in every job we take. We can only do this by conveying trust and understanding while only using the best materials.</p>
            <p className="text"> Call us for a consultation when you are ready to receive the best customer care and best remodeling and repair services South Florida has to offer.</p>
         </div>

         
       <div className="horizontal-cards">
          <h2 className="horizontal-cards-child"> Affordable <span  > <img className="horizontal-cards-child-icon" src={saving} alt="icon-of-wallet" /></span></h2>
          <h2 className="horizontal-cards-child"> Trust-worthy <span> <img className="horizontal-cards-child-icon" src={trust} alt="icon-of-handshake"/></span></h2>
          <h2 className="horizontal-cards-child"> Long-lasting <span> <img className="horizontal-cards-child-icon" src={long} alt="icon-of-infinity-symbol"/></span> </h2>
          <h2 className="horizontal-cards-child"> Beautiful Results <span> <img className="horizontal-cards-child-icon" src={beautiful} alt="icon-of-diamond" /></span></h2>
       </div>
       

         <div className="horizontal-cards-col">
             <h3> Call us to learn more about how we can remodel your house!</h3>
             <span > <a href="tel:4044242895"><img className="horizontal-cards-child-icon" src={support} alt="icon-of-service" /></a></span>

         </div>

         <Footer/>
       </div>
    )
}

export default Home;