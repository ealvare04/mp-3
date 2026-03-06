import {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledMain } from "../../App.tsx";



const StyledOutput = styled.h4`
    color: ${(props)=>props.theme===true?"red":"black"};
    width: 60%;

    margin: auto;
    padding: 5%;

    background-color: white;
    border: 7px solid darkgrey;
`;

const StyledProjects = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const StyledCalculator = styled.div`
    width: 85%;

    margin: 5% auto;
    padding: 5%;

    border: 7px solid grey;
    background-color: lightgray;

    font-family: "Comic Sans MS", sans-serif;
    
    h2 {
        margin-bottom: 2%;
    }
`;

const StyledInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
        text-align: center;
        width: 50%;
        padding: 2%;
    }
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const StyledAllButtons = styled.div`
    width: 100%;
    padding: 5%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledButtons = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    button {
        width: 50%;
        height: 50%;

        margin: 1%;
        padding: 5%;

        font-size: calc(10px + 1vh);
    }
    
    @media screen and (max-width: 750px) {
        flex-direction: row;
    }
`;

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
        setOutput(0);
    }

    return (
        <StyledMain>
            <h2>Projects</h2>
            <StyledProjects>
                <StyledCalculator>
                    <h2>JavaScript Calculator</h2>
                    <StyledInputs>
                        <label htmlFor="first">First Number: </label>
                        <input
                            id={`first`}
                            value={first}
                            placeholder="..."
                            onChange={(e)=>setFirst(e.target.value)}
                        />
                        <label htmlFor="second">Second Number: </label>
                        <input
                            id={`second`}
                            value={second}
                            placeholder="..."
                            onChange={(e)=> setSecond(e.target.value)}
                        />
                    </StyledInputs>
                    <StyledAllButtons>
                        <StyledButtons>
                            <button onClick={doAddition}>+</button>
                            <button onClick={doSubtraction}>-</button>
                            <button onClick={doMultiplication}>*</button>
                        </StyledButtons>
                        <StyledButtons>
                            <button onClick={doDivision}>/</button>
                            <button onClick={doPower}>^</button>
                            <button onClick={doClear}>C</button>
                        </StyledButtons>
                    </StyledAllButtons>


                    <StyledOutput theme={output<0 ? true : false}>{output}</StyledOutput>
                </StyledCalculator>

                    <h3>
                        Rusty Game |
                        <Link to="https://github.com/ealvare04/rusty-game">GitHub Repository</Link>
                    </h3>
                    <h4>CS392 M1 Rust, in Practice and in Theory Final Project | Dec 2024</h4>
                    <p>
                        A small 2-D video game made using the
                        <Link to="https://bevy.org/">Bevy</Link>
                        game engine.
                        Follows
                        <Link to="https://aibodh.com/">The Impatient Programmer's Guide to Bevy and Rust</Link>
                        up to Chapter 3.
                        Added collisions, enemies, and a combat system.
                    </p>

                    <h3>
                        Moodify |
                        <Link to="https://cs-people.bu.edu/ealvare/cs-103/projects/final/Moodify/home/home.html">Link</Link>
                    </h3>
                    <h4>CS103 Final Project | Dec 2025</h4>
                    <p>
                        A web application that returns curated Spotify playlists based on your mood levels.
                        Originally a 3-person project, reduced to a 2-person project. Completed original
                        scope of project. Focused on JavaScript in main page, and Calm and Angry pages
                    </p>

                    <h3>
                        Currency Converter |
                        <Link to="https://github.com/bmahoney1/CS411_Repository/tree/main/Final_Project">GitHub Repository</Link>
                    </h3>
                    <h4>CS411 Final Project | Dec 2024</h4>
                    <p>
                        A web application that uses a currency rate API to convert a currency's value to another.
                        Features account creation and password hashing. Worked in a 3-person team, focused on unit
                        testing.
                    </p>
            </StyledProjects>
        </StyledMain>
    );
}