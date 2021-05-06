import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import call from "./Images/call.svg";
import email from "./Images/email.svg";
import google from "./Images/google.svg";
import sms from "./Images/sms.svg";
import yelp from "./Images/yelp.svg";



const Contact= () => {
    return (
        <div className="bg"> 
            <Header/>
                <content className="contacts"> 
                    <h1> Contact Us</h1>
                    <div className="contact-methods">
                        <div className="contact"> Call Us
                        <a href="tel:4044242895">Call Us at (404) 424 - 2895</a>

                        <p> Contact us with any questions you might have!  </p>
                       
                        </div>
                    
                        <div className="contact">Email Us
                        < a href="calvinedmond2012@yahoo.com"> Email Us at CalvinEdmond2012@yahoo.com </a>

                        <p> Need to email us something? Don't hesitate to reach out. </p>
                        
                        </div>
                            
                    </div>
                    <div className="horizontal-contact">

                    <span className="col"> <a href="tel:4044242895"><img className="horizontal-cards-child-icon" src={call} alt="phone-icon" /></a> Call</span>
                    <span className="col"> <a href="tel:4044242895"><img className="horizontal-cards-child-icon" src={sms} alt="text-icon" /></a> Text</span>
                    <span className="col"> <a href="calvinedmond2012@yahoo.com"><img className="horizontal-cards-child-icon" src={email} alt="email-icon" /></a>Email</span>
                    </div>
                    <div className="contact-line"> 
                        Get in touch with us and we'll be sure to answer any questions you may have.
                        <p> We look forward to serving you and your home's needs.</p>  
                    </div>
                </content>
             <Footer/>
       </div>
    )
}

export default Contact;