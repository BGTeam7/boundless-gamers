import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"
const Connect = () => {
    return (
        <>
        <section className="my-10 mx-24 space-y-2">
            <h1 className="text-center text-2xl md:text-3xl mb-4">LET'S CONNECT!</h1>
            <div className="bluefill p-20 w-1/2 m-auto">
                <form action="mailto:audreychung10@gmail.com" className="flex flex-col ">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="firstname" placeholder="Your name.."></input>
                    <label for="email">Email</label>
                    <input type="text" id="name" name="firstname" placeholder="Your email.."></input>
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject title.."></input>
                    <label for="message">Message</label>
                    <textarea type="text" id="message" name="message" placeholder="Write something.." className="h-48"></textarea>
                    
                    <input className="pinkgradient p-2 rounded-md" type="submit" value="Submit"></input>
                </form>
            </div>
        </section>
        </>
    );
}

export default Connect;