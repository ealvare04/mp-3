import styled from "styled-components";
import { StyledMain } from "../../App.tsx";


const StyledSkills = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export default function Skills() {
    return (
        <StyledMain>
            <StyledSkills>
            <h2>Skills</h2>

                    <h3>Web Development</h3>
                    <ul className="main-list">
                        <li>React</li>
                        <li>Django</li>
                        <li>CSS</li>
                    </ul>

                    <h3>Databases</h3>
                    <ul className="main-list">
                        <li>SQLite</li>
                        <li>MongoDB</li>
                        <li>XML</li>
                    </ul>

                    <h3>Programming Languages</h3>
                    <ul className="main-list">
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>OCaml</li>
                        <li>Rust</li>
                        <li>Go</li>
                    </ul>
            </StyledSkills>
        </StyledMain>
    );
}