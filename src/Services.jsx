import React from "react";
import Header from "./Header";
import Footer  from "./Footer";


const Services = () => {
    return (
        <div className="bg"> 
        <Header/>
        <div className="services" >
            <h1> Top Quality Services We Offer</h1>
            <div className="services-list"> 
                <div> 
                    <h2> Interior Services</h2> 
                    <ul>
                        <li>Heating and Cooling</li>
                        <li>Ducts and Vents</li>
                        <li>Surface Preperation and Painting</li>
                        <li>Carpentary Finishing</li>
                        <li>Drywall Repair</li>
                        <li>Flooring Installation</li>
                        <li>Appliance Installation</li>
                        <li>Fixture Installation</li>
                        <li>Cabinet Installation</li>
                        <li>Bathroom Remodeling</li>
                        <li>Kitchen Remodeling</li>
                    </ul>
                </div>
                <div>
                    <h2> Exterior Services</h2>
                    <ul>
                        <li>Tennis Court Maintenance</li>
                        <li>Pressure Washing</li>
                        <li>Surface Preperation and Painting</li>
                        <li> Weather Proofing</li>
                        <li> Gutter Repair and Maintenance</li>
                        <li> Irrigation System Repair and Maintenance</li>
                        <li> Lawn Maintenance</li>
                        <li> Shingle Replacements</li>
                    </ul>
                </div>
            </div>
            <div className="services-not">
            <h2>Don't See What You're Looking For?</h2>
            <p> If you don't see it, call us anyway because we probably do it!</p>
            </div>
        </div>
      
        <Footer/>
       </div>
    )
}

export default Services;