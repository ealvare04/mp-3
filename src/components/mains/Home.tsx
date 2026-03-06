import styled from 'styled-components';
import photo from "../../assets/me.png";
import { StyledMain } from "../../App.tsx";


const StyledHome=styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const StyledImage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default function Home() {
    return (
        <StyledMain>
            <h2>Home</h2>
            <StyledHome>
                <StyledImage>
                    <img src={photo} alt="Edison"/>
                    <p>
                        Hello, and welcome to my resume website! My name is Edison Alvarez, and
                        I am a senior at Boston University studying Computer Science.
                        I would like to advance my career in computer science by working as a
                        web developer, and eventually continue my studies as a Graduate student.
                    </p>
                </StyledImage>
                <p>
                    Here you can find my educational history, skills, projects, and more!
                </p>
            </StyledHome>
        </StyledMain>
    );
}