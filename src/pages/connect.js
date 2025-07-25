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
                <h1 className="text-center text-2xl md:text-3xl min-w-max">DONATIONS</h1>
                <div className="hidden sm:flex sm:flex-auto">
                    <img src={circuit} className="w-full ml-4"/>
                </div>
                <div className="flex flex-auto sm:hidden">
                    <img src={circuit2} className="w-full ml-4 -scale-y-100"/>
                </div>
            </div>
            <p className="mb-8">
                Your support is optional but greatly appreciated, as it helps us aid various gaming charities like Child's Play and others. Our mission is to supply gaming hardware and physical games to these charitable organizations. We also create care packages with game keys for gamers going through tough times, and we run numerous giveaways in communities to bring more smiles to people's faces.
            </p>
            <p className="text-lg font-semibold">Ways to Contribute:</p>
            <ol className="">
                <li>Click the "Donate" button to send funds directly to Boundless Gamers.</li>
                <li>Physical Donations: Games, consoles, controllers, and cables can be sent to our PO Box. These items will be assembled into special bundles for charities.
                    <br/>Boundless Gamers
PO BOX 105
Aquebogue, NY 11931
                </li>
                <li>Digital Game Donations: Many Boundless Gamers community members and Video Game Developers/Publishers generously donate Steam, Xbox, PlayStation, and Nintendo keys for giveaways and care packages. To donate digital keys, reach out to an admin on our private Facebook group.</li>
            </ol>
            <p>Your contributions make a significant impact in the gaming community. Thank you for your support!</p>
        </section>
        <section className="my-10 md:mx-24 space-y-2">
            <h1 className="text-center text-2xl md:text-3xl mb-4">LET'S CONNECT!</h1>
            <div className="py-2 md:py-20 mx-8 md:mx-24 m-auto">
                <form action="mailto:audreychung10@gmail.com" className="flex flex-col ">
                    <label for="name">Full Name</label>
                    <input className="bluefill" type="text" id="name" name="firstname" placeholder="Your name.." required></input>
                    <label for="email">Email</label>
                    <input type="text" id="name" name="firstname" placeholder="Your email.." required></input>
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject title.." required></input>
                    <label for="message">Message</label>
                    <textarea type="text" id="message" name="message" placeholder="Write something.." className="h-48" required></textarea>
                    
                    <input className="pinkgradient p-2 px-4 rounded-md w-min self-end" type="submit" value="Submit"></input>
                </form>
            </div>
        </section>
        </>
    );
}

export default Connect;