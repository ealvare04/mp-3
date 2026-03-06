import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledNav=styled.nav`
    width: 30%;
    border: 2px solid #25343f;
    background-color: #ff9b51;

    ul {
        width: 100%;
        height: 75vh;
        margin: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        list-style: none;
        padding-left: 0;

        @media screen and (max-width: 750px) {
            height: 100%;
            width: 100%;
            flex-direction: row;
        }
    }
    
    a {
        padding: 5%;
        color: black;
        background-color: white;
        border: 2px solid #25343f;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;

        @media screen and (max-width: 750px) {
            border-radius: 0;
        }
    }

    a:hover {
        background-color: #25343f;
        color: #eaefef;
    }

    @media screen and (max-width: 750px) {
        height: 10vh;
        
        li {
            display: inline;
        }

        width: 100%;
    }
`;

export default  function Nav() {
    return (
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experiences">Experiences</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/organizations">Organizations</Link></li>
            </ul>
        </StyledNav>
    );
}