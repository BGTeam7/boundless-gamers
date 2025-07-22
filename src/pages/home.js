import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import TeamMembers from "../data/teammembers";
import TeamCard from "../components/teamcard";
import conspiracy from "../assets/conspiracy.svg";
import topcircuit from "../assets/topcircuit.svg";
import circuit from "../assets/circuit.svg";
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
        <div className="relative hero bg-cover" style={{ backgroundImage: `url(${background})`}}>
            <div className="absolute gradient-shape"></div>
            <h1 className="text-white absolute mx-auto md:left-10 bottom-1/4 text-left font-bold z-10 text-xl md:text-3xl">
                Welcome to<br/>Pixel Games<br/>Studios!
            </h1>

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
                <img src={logo} className="w-36 h-full justify-center"/>
                <p className="text-xl">Non-profit gaming charity developing a game called "It's a Conspiracy!" <br/><br/>51% of the proceeds will go to our partners: Gamers Outreach, Stack Up, and Extra Life.</p>
            </div>
        </section>
        <section>
            <div className="sm:flex place-items-end gap-5">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl mx-0 sm:mx-8 ">PARTNERS</h1>
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full"/>
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
            <div className="mx-0 sm:mx-24 flex flex-col gap-8 justify-center text-center">
                <img src={conspiracy} className="w-4/5 self-center"></img>
                <h2 className="text-base md:text-3xl font-semibold textgradient">GAME COMING SOON...</h2>
                <p className=" text-sm md:text-base sixtyfour">Stay tuned for updates</p>
            </div>
            <img src={topcircuit} className="-scale-y-100"></img>
        </section>
        <section className=" bg-left-top bg-cover py-32" style={{ backgroundImage: `url(${background})`}}>
            <div className="bluefill m-auto px-auto py-32 space-y-8 w-3/4 text-center">
                <h2 className="text-2xl md:text-5xl font-bold">JOIN OUR CHARITY LIVESTREAM!</h2>
                <p>Every Saturday on Twitch 8pm EST</p>
                <a href="https://www.twitch.tv/boundlessgamers">
                    <button className="pinkgradient text-white font-medium righteous rounded-md p-2 mt-4">GET INVOLVED</button>
                </a>
            </div>
        </section>
        <section>
            <div className="sm:flex place-items-end gap-5">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0 ">LEADERSHIP</h1>
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full"/>
                </div>
            </div>
            <div className="my-12 flex flex-wrap justify-center gap-3 md:gap-6 mx-4 md:mx-24">
                {TeamMembers.map((e) => {
                    return (
                        <TeamCard name={e.name} pronouns={e.pronouns} role={e.role} skills={e.skills} email={e.email} img={e.img} fact={e.fact}/>
                    );
                })}
            </div>
        </section>
        <section>
            <div className="sm:flex place-items-end gap-5">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-xl md:text-3xl sm:ml-0">STREAMER FRIENDS</h1>
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full"/>
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