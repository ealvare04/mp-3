import {useState} from "react";

export default function Projects() {
    const[first, setFirst] = useState("");
    const[second, setSecond] = useState("");
    const[output, setOutput] = useState(0);

    function doAddition(){
        setOutput(Number(first) + Number(second));
    }

    function doSubtraction(){
        setOutput(Number(first) - Number(second));
    }

    function doMultiplication(){
        setOutput(Number(first) * Number(second));
    }

    function doDivision(){
        setOutput(Number(first) / Number(second));
    }

    function doPower() {
        let result = 1;

        for (let i=0; i < Number(second); i++) {
            result = result * Number(first);
        }

        setOutput(result);
    }

    function doClear() {
        setFirst("");
        setSecond("");
    }

    return (
        <main>
            <h2>Projects</h2>
            <div id="main-content">
                <div id="calculator">
                    <h2>JavaScript Calculator</h2>
                    <div id="inputs">
                        <label htmlFor="first">First Number: </label>
                        <input
                            id={`first`}
                            value={first}
                            placeholder="enter first number"
                            onChange={(e)=>setFirst(e.target.value)}
                        />
                        <label htmlFor="second">Second Number: </label>
                        <input
                            id={`second`}
                            value={second}
                            placeholder="enter second number"
                            onChange={(e)=> setSecond(e.target.value)}
                        />

                    </div>
                    <div id="buttons">
                        <div id="buttons1">
                            <button onClick={doAddition}>+</button>
                            <button onClick={doSubtraction}>-</button>
                            <button onClick={doMultiplication}>*</button>
                        </div>
                        <div id="buttons2">
                            <button onClick={doDivision}>/</button>
                            <button onClick={doPower}>^</button>
                            <button onClick={doClear}>C</button>
                        </div>
                    </div>
                    <h4 id="output">{output}</h4>
                </div>

                <div>
                    <h3>
                        Rusty Game |
                        <a href="https://github.com/ealvare04/rusty-game">GitHub Repository</a>
                    </h3>
                    <h4>CS392 M1 Rust, in Practice and in Theory Final Project | Dec 2024</h4>
                    <p>
                        A small 2-D video game made using the
                        <a href="https://bevy.org/">Bevy</a>
                        game engine.
                        Follows
                        <a href="https://aibodh.com/">The Impatient Programmer's Guide to Bevy and Rust</a>
                        up to Chapter 3.
                        Added collisions, enemies, and a combat system.
                    </p>
                </div>
                <div>
                    <h3>
                        Moodify |
                        <a href="https://cs-people.bu.edu/ealvare/cs-103/projects/final/Moodify/home/home.html">Link</a>
                    </h3>
                    <h4>CS103 Final Project | Dec 2025</h4>
                    <p>
                        A web application that returns curated Spotify playlists based on your mood levels.
                        Originally a 3-person project, reduced to a 2-person project. Completed original
                        scope of project. Focused on JavaScript in main page, and Calm and Angry pages
                    </p>
                </div>

                <div>
                    <h3>
                        Currency Converter |
                        <a href="https://github.com/bmahoney1/CS411_Repository/tree/main/Final_Project">GitHub
                            Repository</a>
                    </h3>
                    <h4>CS411 Final Project | Dec 2024</h4>
                    <p>
                        A web application that uses a currency rate API to convert a currency's value to another.
                        Features account creation and password hashing. Worked in a 3-person team, focused on unit
                        testing.
                    </p>
                </div>
            </div>
        </main>
    );
}