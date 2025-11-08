import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"
import circuit from "../assets/circuit.svg";
import circuit2 from "../assets/circuit2.svg";

const Connect = () => {
    return (
        <>
        <section className="mx-4 md:mx-24 my-10 space-y-2">
            <div className="sm:flex place-items-end gap-5 mt-10">
                <div className="hidden sm:block sm:flex-auto">
                    <img src={circuit} className="w-full -scale-x-100"/>
                </div>
                <h1 className="text-center text-2xl md:text-3xl min-w-max">HOW DO I SUPPORT YOU?</h1>
                <div className="hidden sm:flex sm:flex-auto">
                    <img src={circuit} className="w-full ml-4"/>
                </div>
                <div className="flex flex-auto sm:hidden">
                    <img src={circuit2} className="w-full ml-4 -scale-y-100"/>
                </div>
            </div>
            <div className="text-lg space-y-6">

                    <p>
                        Your support, while optional, would make a significant difference. It enables us to further our mission with Boundless Gamers and bolster our mission to our three major charity partners through the ongoing game development.
                    </p>

                <p>We also create care packages with game keys for gamers going through tough times, and we run numerous giveaways in communities to bring more smiles to people’s faces.</p>

                <div className="space-y-6 mx-4 md:mx-24">
                    <p className="text-lg font-semibold">Ways to Contribute:</p>
                    <ol className="list-decimal list-outside ml-6">
                        <li>
                            Click the "Donate" button to send funds directly to Boundless Gamers.
                        </li>
                        <li>
                            Physical Donations: Games, consoles, controllers, and cables can be sent to our PO Box. These items will be assembled into special bundles for families who are on a tight budget. 
                            <br/>
                            Boundless Gamers
                            <br/>
                            PO Box 105
                            <br/>
                            Aquebogue, NY 11931
                            <br/>
                        </li>
                        <li>
                            Digital Game Donations: Many Boundless Gamers community members and Video Game Developers/Publishers generously donate Steam, Xbox, PlayStation, and Nintendo keys for giveaways and care packages. To donate digital keys, reach out to an admin or moderator on our Discord server.
                        </li>
                    </ol>
                </div>
                <p className="font-bold text-xl border-pink-300 border-2 pinkframe p-3 text-center">
                    Your contributions make a significant impact in the gaming community. Thank you for your support!
                </p>
            </div>
        </section>
        <section className="mt-12 md:mx-24 space-y-2">
            <a className="text-center text-lg md:text-3xl mt-4 pinkgradient p-2 px-4 rounded-md w-max mx-auto" href="mailto:admin@boundlessgamers.org">LET'S CHAT!</a>
            <div className="py-2 md:py-20 mx-8 md:mx-24 m-auto flex justify-center">
                {/* <button className="pinkgradient p-2 px-4 rounded-md w-max " action="mailto:admin@boundlessgamers.org">Email us!</button> */}
                {/* <form action="mailto:admin@boundlessgamers.org" method='POST' id="contact-form" className="flex flex-col ">
                    <label for="name">Full Name</label>
                    <input className="bluefill" type="text" id="name" name="name" placeholder="Your name.." required></input>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." required></input>
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject title.." required></input>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." className="h-48" required></textarea>
                    
                    <input className="pinkgradient p-2 px-4 rounded-md w-min self-end" type="submit" value="Send"></input>
                </form> */}
            </div>
        </section>
        </>
    );
}

export default Connect;