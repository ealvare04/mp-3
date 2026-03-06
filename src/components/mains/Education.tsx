import { Link } from "react-router-dom";
import styled from 'styled-components';
import { StyledMain } from "../../App.tsx";


const StyledEducation = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export default function Education(){
    return (
        <StyledMain>
            <h2>Education</h2>
            <StyledEducation>
                <div>
                    <h3>Bachelor of Arts in Computer Science</h3>
                    <h4><strong><em><u>Boston University, MA | <Link to="https://www.bu.edu/cas/">College of Arts and Sciences</Link></u></em></strong></h4>
                    <p>May 2023 - May 2026</p>
                </div>
                <div>
                    <h3>General Education</h3>
                    <h4><strong><em><u>Boston University, MA | <Link to="https://www.bu.edu/cgs/">College of General Studies</Link></u></em></strong></h4>
                    <p>May 2023 - May 2024</p>
                </div>
                <div>
                    <h3>High School Diploma</h3>
                    <h4><strong><em><u>Brentwood, NY | <Link to="https://bhs.bufsd.org/">Brentwood High School</Link></u></em></strong></h4>
                    <p>Sep 2018 - Jun 2022</p>
                </div>
            </StyledEducation>
        </StyledMain>
    );
}