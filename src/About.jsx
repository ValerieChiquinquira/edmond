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
                    Our mission is to provide those in need of reliable and affordable services to those in need. We believe 
                    every one should be able to enjoy their home without worrying about its structural integrity or aesthetics. 
                    We spent so much time in our homes that we should love it. </div>
                    <div className="value"> 
                    We value trust and transperancy so we make it our goal to ensure every client we meet trusts our work and fully understands
                    what our plans consists of. With these two elements, we can be sure that each client relationship consists of honesty and long-lasting satisfaction.
                    </div>
                </div>

            </content>
            </div>
        <Footer/>
       </div>
    )
}

export default About;