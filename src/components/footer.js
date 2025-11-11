import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logos/dark_full.svg"


const Footer = () => {


    return (
        <footer className="mb-10 mx-4 md:mx-24 border-solid rounded-lg border-pink-300 border-2 p-2 pinkframe">
            <div className="border-solid rounded-md border-blue-300 border-2 px-10 py-4 bluefill space-y-4">
                <div className="flex justify-around">
                    <img src={logo} className="w-1/3"></img>
                    <div className="grid">
                        <Link to="/privacy" className="text-center text-lg font-semibold m-auto">PRIVACY POLICY</Link>
                        <Link to="/termsofUSE" className="text-center text-lg font-semibold m-auto">TERMS OF USE</Link>
                    </div>
                    <div className="grid">
                        <Link to="https://pixelgamesstudio.org/" className="text-center text-lg font-semibold m-auto uppercase">pixel games studio</Link>
                        <Link to="https://itsaconspiracygame.com/" className="text-center text-lg font-semibold m-auto uppercase">It's a Conspiracy</Link>
                    </div>
                </div>
                
                <div className="flex gap-2 justify-center">
                    <a href="https://www.twitch.tv/boundlessgamers"><FaTwitch size={20}/></a>
                    <a href="https://discord.gg/fFaGCTHfj2"><FaDiscord size={20}/></a>
                    <a href="https://www.instagram.com/boundlessgamers/"><FaInstagram size={20}/></a>
                    <a href="https://twitter.com/BoundIessGamers"><FaXTwitter size={20}/></a>
                    <a href="https://www.facebook.com/BoundlessGamers?mibextid=LQQJ4d"><FaFacebook size={20}/></a>
                </div>
                <div className="text-center text-xs md:text-sm mt-4">
                    Boundless Gamers © {(new Date().getFullYear())}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;