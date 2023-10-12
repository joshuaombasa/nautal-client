import React from "react";
import { Link } from "react-router-dom";
import aboutPagePhoto from "../assets/aboutPage.jpg"

export default function About() {
    return (
        <div className="about--page">
            <img src={aboutPagePhoto} alt="" />
           <div className="about--page--container">
            <h2>Welcome to nautal - Your Gateway to Aquatic Adventures!</h2>
            <p>At nautical, we understand the allure of the open water and the thrill of exploring the seas. Our mission is to provide you with the perfect vessel to make your nautical dreams a reality. Whether you're an experienced sailor or a first-time boater, our fleet of top-notch boats is ready to set you on a course for unforgettable memories.</p>
            <p>Discover a diverse selection of boats to suit your needs. From sleek and agile speedboats for those seeking adrenaline-fueled escapades, to spacious and comfortable pontoons for relaxing cruises with family and friends, our fleet is designed to cater to a variety of preferences. We take pride in maintaining our boats to the highest standards, ensuring your safety and satisfaction.</p>
            <div className="bottom--section">
                <h3>Ready to embark on your aquatic adventure? Explore our website to view our fleet, check availability, and book your boat today. If you have any questions or need assistance, our friendly and knowledgeable customer support team is just a call or email away.</h3>
                <Link to="/boats" className="gold--link--style">Get started</Link>
            </div>
           </div>
        </div>
    )
}