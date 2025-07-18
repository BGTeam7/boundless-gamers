import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"
const Connect = () => {
    return (
        <>
        <section className="my-10 mx-24 space-y-2">
            <h1 className="text-center text-2xl md:text-3xl mb-4">LET'S CONNECT!</h1>
            <div className="bluefill p-20 w-1/2 m-auto">
                <form className="flex flex-col ">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="firstname" placeholder="Your name.."></input>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="firstname" placeholder="Your name.."></input>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="firstname" placeholder="Your name.."></input>
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." className="h-48"></textarea>
                    
                    <input className="pinkgradient p-2 rounded-md" type="submit" value="Submit"></input>
                </form>
            </div>
        </section>
        </>
    );
}

export default Connect;