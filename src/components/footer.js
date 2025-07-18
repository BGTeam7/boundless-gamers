import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitch } from "react-icons/fa";
import city from "../assets/footer.svg"

const Footer = () => {


    return (
        <footer>
            <div className="relative object-cover -z-10">
                <img src={city}></img>
                <div className="text-white absolute bottom-4  border-solid rounded-md border-blue-300 border-2 px-10 pb-4 bluefill sm:grid gap-6 grid-cols-4">
                <div className="col-span-2 mt-4">
                    <p className="text-lg font-semibold">FOLLOW US</p>
                    <div className="flex gap-2">
                        <FaInstagram/>
                        <FaDiscord/>
                        <FaTwitch/>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold">PIXEL GAMES STUDIOS</p>
                    <ul className="text-base">
                        <li>Boundless Gamers</li>
                        <li>community</li>
                        <li>news</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold">LEGAL</p>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-span-4 text-center text-xs md:text-sm mt-12">
                    Pixel Games Studios ©2025
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;