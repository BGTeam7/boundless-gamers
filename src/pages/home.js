import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import TeamMembers from "../data/teammembers";
import TeamCard from "../components/teamcard";
import conspiracy from "../assets/conspiracy.svg";
import topcircuit from "../assets/topcircuit.svg";
import circuit from "../assets/circuit.svg";
import circuit2 from "../assets/circuit2.svg";
import background from "../assets/game.png";
import gamers from "../assets/gamersoutreach.png";
import extralife from "../assets/extralife.png";
import stackup from "../assets/stackup.png";
import abrava from "../twitch/abravacado.jpeg"
import hallow from "../twitch/hallowbreen.jpg"
import miss from "../twitch/missrelaxgame.jpeg"
import cobra from "../twitch/cobragirl.jpg"

const Home = () => {
    return (
        <>
        <div className="hero bg-cover bg-top" style={{ backgroundImage: `url(${background})`}}>
            {/* PC hero text */}
            <div className="gradient-shape hidden md:flex items-center p-24">
                <h1 className="text-white text-left font-bold text-3xl md:text-4xl">
                    Spreading happiness<br/>One Game at a Time!
                </h1>
            </div>
            {/* Mobile hero text */}
            <div className="gradient-shape-mobile md:hidden">
                <h1 className="text-white text-center font-bold text-3xl md:text-4xl absolute left-0 right-0 bottom-10">
                    Spreading happiness<br/>One Game at a Time!
                </h1>
            </div>
        </div>
        <section className="my-10 space-y-2">
            {/* <div className="sm:flex place-items-end gap-5">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl mx-0 sm:mx-8 ">WHO ARE WE</h1>
                <div className="sm:block sm:flex-auto">
                    <img src={circuit} className="w-full"/>
                </div>
            </div> */}
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                {/* <img src={logo} className="w-36 h-full justify-center -rotate-90 md:rotate-0"/> */}
                <div>
                    <p className="text-2xl text-center">Boundless Gamers is a gaming charity committed to helping kids and others in the gaming community and related organizations.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="sm:flex place-items-end gap-5 mt-10">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl mx-0 sm:mx-8 ">PARTNERS</h1>
                <div className="hidden sm:flex sm:flex-auto">
                    <img src={circuit} className="w-full ml-4"/>
                </div>
                <div className="flex flex-auto sm:hidden">
                    <img src={circuit2} className="w-full ml-4 -scale-y-100"/>
                </div>
            </div>
            <div className="my-12 flex flex-wrap justify-center gap-3 md:gap-6 mx-4 md:mx-24">
                <a href="https://gamersoutreach.org/" className="bluefill">
                    <div className="corner-frame p-2">
                        <img src={gamers} className="w-24 sm:w-52 aspect-square bg-white border-blue-300"></img>
                    </div>
                </a>
                <a href="https://www.stackup.org/" className="bluefill aspect-square">
                    <div className="corner-frame p-2">
                        <img src={stackup} className="w-24 sm:w-52 aspect-square border-blue-300"></img>
                    </div>
                </a>
                <a href="https://www.extra-life.org/home" className="bluefill aspect-square">
                    <div className="corner-frame p-2">
                        <img src={extralife} className="w-24 sm:w-52 aspect-square border-blue-300"></img>
                    </div>
                </a>
            </div>
        </section>
        <section className="my-10">
            <img src={topcircuit}></img>
            <div className="mx-0 h-[60vh] sm:mx-24 flex flex-col gap-8 justify-center text-center">
                <img src={conspiracy} className="px-4 self-center"></img>
                <h2 className="text-2xl md:text-3xl font-semibold textgradient">GAME COMING SOON...</h2>
                <p className=" text-sm md:text-base sixtyfour">Stay tuned for updates</p>
            </div>
            <img src={topcircuit} className="-scale-y-100"></img>
        </section>
        <section className=" bg-left-top bg-cover py-32" style={{ backgroundImage: `url(${background})`}}>
            <div className="bluefill m-auto px-auto py-32 space-y-8 w-3/4 text-center">
                <h2 className="text-2xl md:text-5xl font-bold">JOIN OUR CHARITY LIVESTREAM!</h2>
                <p>Every Saturday on Twitch 7pm EST</p>
                <a href="https://www.twitch.tv/boundlessgamers">
                    <button className="pinkgradient text-white font-medium righteous rounded-md p-2 mt-4">GET INVOLVED</button>
                </a>
            </div>
        </section>
        <section>
            <div className="sm:flex place-items-end gap-5 mt-10">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl">LEADERSHIP</h1>
                <div className="hidden sm:flex sm:flex-auto">
                    <img src={circuit} className="w-full ml-4"/>
                </div>
                <div className="flex flex-auto sm:hidden">
                    <img src={circuit2} className="w-full ml-4 -scale-y-100"/>
                </div>
            </div>
            <div className="my-12 flex flex-wrap justify-center gap-3 md:gap-6 mx-4 md:mx-24">
                {TeamMembers.map((e) => {
                    return (
                        <TeamCard name={e.name} title={e.title} pronouns={e.pronouns} role={e.role} skills={e.skills} email={e.email} img={e.img} fact={e.fact}/>
                    );
                })}
            </div>
        </section>
        <section>
            <div className="sm:flex place-items-end gap-5 mt-10">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl min-w-max">STREAMER FRIENDS</h1>
                <div className="hidden sm:flex sm:flex-auto">
                    <img src={circuit} className="w-full ml-4"/>
                </div>
                <div className="flex sm:hidden">
                    <img src={circuit2} className="w-full ml-4 -scale-y-100"/>
                </div>
            </div>
            <div className="my-12 flex flex-wrap justify-center gap-3 md:gap-6 mx-4 md:mx-24">
                <a href="https://www.twitch.tv/abravacado" className="bluefill aspect-square">
                    <img src={abrava} className="w-24 sm:w-52 aspect-square corner-frame p-1 sm:p-2 border-blue-300"></img>
                </a>
                
                <a href="https://www.twitch.tv/hallowbreen/home" className="bluefill aspect-square">
                    <img src={hallow} className="w-24 sm:w-52 aspect-square corner-frame p-1 sm:p-2 border-blue-300"></img>
                </a>
                <a href="https://www.twitch.tv/missrelaxinggaming/home" className="bluefill aspect-square">
                    <img src={miss} className="w-24 sm:w-52 aspect-square corner-frame p-1 sm:p-2 border-blue-300"></img>
                </a>
                <a href="https://www.twitch.tv/cobragirl" className="bluefill aspect-square">
                    <img src={cobra} className="w-24 sm:w-52 aspect-square corner-frame p-1 sm:p-2 border-blue-300"></img>
                </a>
            </div>
        </section>
        </>
    );
}

export default Home;