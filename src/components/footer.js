import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";


const Footer = () => {


    return (
        <footer className="mb-10 mx-4 md:mx-24 border-solid rounded-lg border-pink-300 border-2 p-2 pinkframe">
            <div className="border-solid rounded-md border-blue-300 border-2 px-10 pb-4 bluefill flex flex-col sm:grid gap-6 grid-cols-3">
                <div className="mt-4 mx-auto">
                    <p className="text-lg text-center font-semibold">FOLLOW US</p>
                    <div className="flex gap-2 justify-center">
                        <a href="https://www.twitch.tv/boundlessgamers"><FaTwitch/></a>
                        <a href="https://discord.gg/fFaGCTHfj2"><FaDiscord/></a>
                        <a href="https://www.instagram.com/boundlessgamers/"><FaInstagram/></a>
                        <a href="https://twitter.com/BoundIessGamers"><PiXLogo/></a>
                        <a href="https://www.facebook.com/BoundlessGamers?mibextid=LQQJ4d"><FaFacebook/></a>
                        
                    </div>
                </div>
                <div className="mt-4">
                    {/* <Link to="/privacy" className="text-center text-lg font-semibold m-auto">PRIVACY POLICY</Link> */}
                </div>
                <div className="mt-4">
                    
                    <Link to="/termsofUSE" className="text-center text-lg font-semibold m-auto">TERMS OF USE</Link>
                </div>
                <div className="col-span-3 text-center text-xs md:text-sm mt-4">
                    Pixel Games Studios ©{(new Date().getFullYear())}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;