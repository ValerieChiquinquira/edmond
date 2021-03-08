import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
       <div className="footer">
           <div className="left-footer">
               <h2> Service Areas</h2>
               <ul>
                   <li> West Palm Beach</li>
                   <li> Broward</li>
                   <li> Miami-Dade</li>
               </ul>
           </div>
           <div className="center-footer">
           <Link to="/services" className="service-footer"> Services </Link>
            <div className="center-footer-div"> 
            <div> 
                <ul>
                   <li>Home remodeling</li>
                    <li>Bathroom Remodeling</li>
                    <li>Kitchen Remodeling</li>
                    <li>Central Air and Heating</li>
                   <li> Pressure Washing</li>
                </ul>

            </div>
               <div>
                <ul>
                    <li> Prep & Painting </li>
                    <li>Tennis Court Maintenance</li>
                    <li> Tile Installation</li>
                    <li> Lawn Maintenance</li>
                    <li> And much more...</li>
               </ul>
            </div>
            </div>
           </div>
           <div className="right-footer">
               <h2>Quick Contacts</h2>
               <p><a href="tel:4044242895">Call Us Direct</a></p>
               <p>< a href="calvinedmond2012@gmail.com"> Email Us Direct </a></p>
           </div>
       </div>
    )
}

export default Footer;