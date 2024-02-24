import React from "react";
import "./style.css";
import { CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>


            <div className="foo">
                <div className="foo_item">
                    <h3 className="foothead">CONNECT WITH US</h3>
                    {/* <div className="foo_input">
                    <input type="email" name="" id="foo_email" placeholder="Enter Email ID"/>
                    <button className="email_btn"><i className="fas fa-arrow-right"></i></button>
                </div> */}

                    <div className="contact_us">
                        <div className="contact_us_item"><a href="https://www.youtube.com/user/CromaRetail"><CiYoutube className="logo" /></a></div>
                        <div className="contact_us_item"><a href="https://www.facebook.com/CromaRetail/"><SlSocialFacebook className="logo" /></a></div>
                        <div className="contact_us_item"><a href="https://www.instagram.com/croma.retail/"><FaInstagram className="logo" /></a></div>
                        <div className="contact_us_item"><a href="https://www.linkedin.com/company/infiniti-retail-limited-croma---a-tata-enterprise/"><FaLinkedinIn className="logo" /></a></div>
                        <div className="contact_us_item"><a href="https://twitter.com/cromaretail?s=11"><FaTwitter className="logo" /></a></div>
                    </div>
                    <p className="lastline">© Copyright 2021 Croma. All rights reserved</p>

                </div>
                <div className="foo_item">
                    <h3 className="foothead">USEFUL LINKS</h3>
                    <div className="foo_item_div">
                        <div><a href="#top">About Croma</a></div>
                        <div><a href="#top">E-Care</a></div>
                        <div><a href="#top">Help And Support</a></div>
                        <div><a href="#top">Franchise Opportunity</a></div>
                        <div><a href="#top">FAQs</a></div>
                        <div><a href="#top">Site Map</a></div>
                        <div><a href="#top">Return Policy</a></div>
                        <div><a href="#top">Careers At Crom</a>a</div>
                        <div><a href="#top">Bulk Enquiry</a></div>
                        <div><a href="#top">Terms Of Use</a></div>
                        <div><a href="#top">Store Locator</a></div>
                        <div><a href="#top">Disclaimer</a></div>
                        <div><a href="#top">Delightful Programmes</a></div>
                        <div><a href="#top">Privacy Policy</a></div>
                    </div>
                </div>
                <div className="foo_item last">
                    <h3 className="foothead">PRODUCTS</h3>
                    <div class="foo_item_div">
                        <div><a href="#top">Televisions & Accessories</a></div>
                        <div><a href="#top">Grooming & Personal Care</a></div>
                        <div><a href="#top">Home Appliances</a></div>
                        <div><a href="#top">Cameras & Accessories</a></div>
                        <div><a href="#top">Phones & Wearables</a></div>
                        <div><a href="#top">Smart Devices</a></div>
                        <div><a href="#top">Computers & Tablets</a></div>
                        <div><a href="#top">Gaming</a></div>
                        <div><a href="#top">Kitchen Appliances</a></div>
                        <div><a href="#top">Accessories</a></div>
                        <div><a href="#top">Audio & Video</a></div>
                        <div><a href="#top">Top Brands</a></div>
                        <div><a href="#top">Health & Fitness</a></div>

                    </div>
                </div>
            </div>

        </footer>
    )



}
export default Footer;