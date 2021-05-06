import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const About = () => {
    return (
        <div className="bg"> 
            <Header/>
        <div className="content"> 
            <h1> About Us</h1>
            <content className="about">
                <div className="about-us"> 
                <p>Edmond Enterprises, LLC is a family-owned and operated small business that has been serving South Florida for 
                more than a decade. We started our business when we noticed there was a demand for affordable and 
                trust-worthy home maintenance services. Since our creation, we've been able to expand our services to include home 
                maintenance, home repair, and remodeling services.</p>

                <p> We have certified and experienced technicians 
                well-versed in all aspects of home maintenance and repair. </p>
            
             
                    <div className="mission"> 
                    <p> Our mission is to provide reliable and affordable services to those in need. We believe 
                    every one should be able to enjoy their home without worrying about its structural integrity 
                    or aesthetics. </p>
                    <p> We spend so much time in our homes that we should love it. </p></div>
                    <div className="value"> 
                    <p> We value trust and transperancy so we make it our goal to ensure every client we meet 
                        trusts our work and 
                    fully understands what the work entails.</p>
                    </div>
                </div>

            </content>
            </div>
        <Footer/>
       </div>
    )
}

export default About;