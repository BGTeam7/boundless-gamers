import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"
import { TfiTarget } from "react-icons/tfi";
import background from "../assets/game.png";
const Mission = () => {
    return (
        <>
        <div className="relative hero bg-cover" style={{ backgroundImage: `url(${background})`}}>
            {/* <img src={logo} className="absolute object-cover aspec"></img> */}
            <div className="absolute gradient-shape"></div>
            <h1 className="text-white absolute mx-auto md:left-10 bottom-1/4 text-left font-bold z-10 text-xl md:text-3xl">
                Welcome to<br/>Pixel Games<br/>Studios!
            </h1>

        </div>
        <section className="my-10 space-y-2">
            <h1 className="text-center text-2xl md:text-3xl">MISSION</h1>
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                {/* <img src={logo} className="w-48 h-full justify-center"/> */}
                <TfiTarget className="w-48 h-full"/>
                <p>Our mission is to spread awareness and educate how gaming plays a role in mental health, physical disabilities, cognitive, dextral and cancer treatments. Our goal is to promote gaming in a positive light and how it can help improve our daily lives.</p>
            </div>
        </section>
        <section className="my-10 mx-24 space-y-8">
            <h1 className="text-center text-2xl md:text-3xl">OUR STORY</h1>
            <p>Boundless Gamers started out as simply a weekly podcast. As we grew, we found the opportunity to expand our reach and help more people. We became a non-profit charitable organization that promotes our love of gaming matched with our need to help others. We give away Community donated Steam games to those who are having a bad day, are experiencing hardship or need to escape for a short time while in the hospital. Our wonderful Community donates so generously that we are able to also conduct free game giveaways weekly on our various social media platforms as well as on our weekly podcast show. </p>
            <p>We started working with other charitable organizations that share our goals and found other avenues where we can help even more people the ever before. We partnered with and started a new game development studio with the sole purpose to create exciting fun games where the proceeds to our charity partners. Pixel Games Studio was born as a division of Boundless Gamers. We share common goals and missions, but going about them differently. Boundless Gamers still focuses on giving away free games to those in need, raising funds for charity and providing social media content. Pixel Games Studio has taken the path of creating games by bringing the development community together to create excellence, helping and boosting the game development industry while staying true to it’s non-profit charitable origins.</p>
        </section>
        <section className="my-10 space-y-2">
            <h1 className="text-center text-2xl md:text-3xl">OUR VALUES</h1>
            <div className="hidden md:grid my-10 mx-24 grid-cols-3 gap-4 border-x-2 border-pink-300 p-6">
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32 ">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
                <div className="bluefill border-solid rounded-sm border-blue-300 border-2 h-32">value</div>
            </div>
        </section>
        </>
    );
}

export default Mission;