import {useState, useRef} from "react";
import logo from "../logo.svg"


function TeamCard(props) {

    //Using useToggle Hook

    const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
    };
    const [toggle, setToggle] = useToggle();

    return (
        <div>
            <div className="bluefill" onClick={setToggle}>
                <div className="w-24 sm:w-52 corner-frame border-blue-300 p-1">
                    <img loading="lazy" src={props.img} className="aspect-square w-full object-cover"/>
                    <p className="text-center text-sm md:text-lg">{props.name}</p>
                    <p className="text-center text-xs text-gray-300 md:text-base">{props.title}</p>
                </div>
            </div>
            {toggle &&(
                <div>
                    <div id="overlay" onClick={setToggle}></div>
                    <div className="expanded-card bluefill flex flex-col md:flex-row-reverse gap-2 p-2">
                        <img src={props.img} className="aspect-square w-full md:w-1/3 h-auto object-cover pinkframe border-pink-300 border-2"/>
                        <div className=" md:w-2/3 md:w-4/9 border-s-white border-2 p-4">
                            <div className="flex items-baseline gap-1">
                                <h1 className="text-sm md:text-2xl font-bold">{props.name}</h1>
                                <span className="text-xs md:text-sm"> ({props.pronouns})</span>
                            </div>
                            <hr className="border-pink-300 border-1 my-2"/>
                            <ul className="text-xs md:text-sm xl:text-base">
                                <li><span className="font-bold">Role: </span>{props.role}</li>
                                <li><span className="font-bold">Skills: </span>{props.skills}</li>
                                {/* <li><span className="font-bold">Fun fact: </span>{props.fact}</li> */}
                                <li><span className="font-bold">Email: </span>{props.email}</li>
                            </ul>
                            <br/>
                            <label for="heart">❤️ </label>
                            <progress id="heart" value="32" max="100"> 32% </progress>
                            <br/>
                            <label for="light">⚡️ </label>
                            <progress id="light" value="32" max="100"> 32% </progress>
                            <br/>
                            <label for="plus">➕ </label>
                            <progress id="plus" value="32" max="100"> 32% </progress>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default TeamCard;