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
                <div>
                    <h3>Web Development</h3>
                    <ul>
                        <li>React</li>
                        <li>Django</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div>
                    <h3>Databases</h3>
                    <ul>
                        <li>SQLite</li>
                        <li>MongoDB</li>
                        <li>XML</li>
                    </ul>
                </div>
                <div>
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>OCaml</li>
                        <li>Rust</li>
                        <li>Go</li>
                    </ul>
                </div>
            </StyledSkills>
        </StyledMain>
    );
}