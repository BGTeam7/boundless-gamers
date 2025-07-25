import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";


const Footer = () => {


    return (
        <footer className="mb-10 mx-4 md:mx-24 border-solid rounded-lg border-pink-300 border-2 p-2 pinkframe">
            <div className="border-solid rounded-md border-blue-300 border-2 px-10 pb-4 bluefill sm:grid gap-6 grid-cols-3">
                <div className="mt-4">
                    <p className="text-lg font-semibold">FOLLOW US</p>
                    <div className="flex gap-2">
                        <a href="https://www.twitch.tv/boundlessgamers"><FaTwitch/></a>
                        <a href="https://discord.gg/fFaGCTHfj2"><FaDiscord/></a>
                        <a href="https://www.instagram.com/boundlessgamers/"><FaInstagram/></a>
                        <a href="https://twitter.com/BoundIessGamers"><PiXLogo/></a>
                        <a href="https://www.facebook.com/BoundlessGamers?mibextid=LQQJ4d"><FaFacebook/></a>
                        
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-center text-lg font-semibold">BOUNDLESS GAMERS</p>
                </div>
                <div className="mt-4 m-auto">
                    <Link to="/legal" className="text-center text-lg font-semibold">LEGAL</Link>
                </div>
                <div className="col-span-3 text-center text-xs md:text-sm mt-4">
                    Pixel Games Studios ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;