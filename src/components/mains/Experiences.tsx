import styled from 'styled-components';
import { StyledMain } from "../../App.tsx";


const StyledExperiences = styled.div`
    
`;

export default function Experiences() {
    return (
        <StyledMain>
            <h2>Experiences</h2>
                <StyledExperiences>
                    <div>
                        <h4>
                            Volunteer Judge |
                            <strong><em><u>Boston Debate League, MA</u></em></strong>
                        </h4>
                        <p><em>Feb. 2023</em></p>
                        <p>
                            Volunteered as a judge at Suffolk University Law School for two debates on varying topics.
                            Supervised and mediated arguments between middle school students.
                        </p>
                    </div>

                    <div>
                        <h4>Holiday Volunteer | <strong><em><u>Oak Park Elementary School, NY</u></em></strong></h4>
                        <p><em>Dec. 2021 &amp; Apr. 2022</em></p>
                        <p>
                            Volunteered at an elementary school in my hometown for Christmas and Easter events for special education students.
                            Accompanied an assigned student for both sessions and helped set up wrapped gifts, egg hunts, and other plans.
                        </p>
                    </div>

                    <div>
                        <h4>
                            High School Pizza Salesman |
                            <strong><em><u>Brentwood High School, NY</u></em></strong>
                        </h4>
                        <p><em>Sep. 2021 - Jun. 2022</em></p>
                        <p>
                            Volunteered multiple times each month to set up a pizza sale for one of my honor societies.
                            Led different diverse teams, handled multiple jobs when volunteers were low to none, and managed cash transactions.
                        </p>
                    </div>
            </StyledExperiences>
        </StyledMain>
    );
}