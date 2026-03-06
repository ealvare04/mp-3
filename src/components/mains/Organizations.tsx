import styled from 'styled-components';
import { StyledMain } from "../../App.tsx";


const StyledOrganizations = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

export default function Organizations() {
    return (
        <StyledMain>
            <h2>Organizations</h2>
            <StyledOrganizations>
                <div>
                    <h3>College Clubs</h3>
                    <ul>
                        <li>BU Garage Bands</li>
                        <li>LATAM Boston University</li>
                    </ul>
                </div>
                <div>
                    <h3>High School Honor Societies</h3>
                    <ul>
                        <li>Mu Alpha Theta | <strong><em>Math Honor Society</em></strong></li>
                        <li>Rho Kappa | <strong><em>Social Studies Honor Society</em></strong></li>
                        <li>Société Honoraire de Français | <strong><em>French Honor Society</em></strong></li>
                    </ul>
                </div>
                <div>
                    <h3>Community Service</h3>
                    <ul>
                        <li>Keep Islip Clean (K.I.C.)</li>
                    </ul>
                </div>
            </StyledOrganizations>
        </StyledMain>
    );
}