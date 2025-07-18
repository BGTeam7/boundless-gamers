import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"
const Mission = () => {
    return (
        <>
        <div className="relative hero">
            {/* <img src={logo} className="absolute object-cover aspec"></img> */}
            <div className="absolute gradient-shape"></div>
            <h1 className="text-white absolute mx-auto md:left-10 bottom-1/4 text-left font-bold z-10 text-xl md:text-3xl">
                Welcome to<br/>Pixel Games<br/>Studios!
            </h1>

        </div>
        <section className="my-10 mx-24">
            <h1 className="text-center text-2xl md:text-3xl">ORIGINS</h1>
            <p>BG SUMMARY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. </p>
        </section>
        <section className="my-10 space-y-2">
            <h1 className="text-center text-2xl md:text-3xl">MISSION & VISION</h1>
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                <img src={logo} className="w-36 h-full justify-center"/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                <img src={logo} className="w-36 h-full justify-center"/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
        </section>
        <section className="my-10 space-y-2">
            <h1 className="text-center text-2xl md:text-3xl">OUR VALUES</h1>
        </section>
        </>
    );
}

export default Mission;