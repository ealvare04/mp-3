import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 8vh;
    border: 2px solid #25343f;
    background-color: #bfc9d1;
    
    p {
        text-align: center;
    }
    
    align-content: center;
`;

export default  function Footer() {

    return(
        <StyledFooter>
            <p>All rights reserved by Edison Alvarez <Link to="/"> Credits</Link> &#169;</p>
        </StyledFooter>
    );
}