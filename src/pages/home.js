import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import TeamMembers from "../data/teammembers";
import TeamCard from "../components/teamcard";
import conspiracy from "../assets/conspiracy.svg";
import topcircuit from "../assets/topcircuit.svg";
import circuit from "../assets/circuit.svg";

const Home = () => {
    return (
        <>
        <div className="relative hero">
            {/* <img src={logo} className="absolute object-cover aspec"></img> */}
            <div className="absolute gradient-shape border-2 border-blue-200"></div>
            <h1 className="text-white absolute mx-auto md:left-10 bottom-1/4 text-left font-bold z-10 text-xl md:text-3xl">
                Welcome to<br/>Pixel Games<br/>Studios!
            </h1>

        </div>
        <section className="my-10 space-y-2">
            <div className="sm:flex place-items-end gap-5 px-24">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0 ">WHO ARE WE</h1>
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full"/>
                </div>
            </div>
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                <img src={logo} className="w-36 h-full justify-center"/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </div>
        </section>
        <section className="my-10 mx-24 space-y-2">
            <div className="sm:flex place-items-end gap-5 px-24">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0 ">OUR FRIENDS</h1>
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
        <section className="my-10">
            <img src={topcircuit}></img>
            <div className="mx-24 flex flex-col gap-8 justify-center text-center">
                <img src={conspiracy} className="w-4/5 self-center"></img>
                <h2 className="text-3xl font-semibold textgradient">GAME COMING SOON...</h2>
                <p className="sixtyfour">Stay tuned for updates</p>
            </div>
            <img src={topcircuit} className="-scale-y-100"></img>
        </section>
        <section className="my-10 mx-24 p-4 flex justify-center">
            <div className="bluefill p-24 space-y-8 h-[50vh] w-1/2 flex flex-col gap-2 text-center">
                <h2 className="text-2xl">Join our charity livestream!</h2>
                <p>Every Saturday on Twitch 8pm EST</p>
                <button className="pinkgradient text-white righteous rounded-md p-2">GET INVOLVED</button>
            </div>
        </section>
        <section className="my-10 mx-24">
            <div className="sm:flex place-items-end gap-5 px-24">
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
        <section className="my-10 mx-24">
            <div className="sm:flex place-items-end gap-5 px-24">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl sm:ml-0 ">SPECIAL THANKS</h1>
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
        </>
    );
}

export default Home;