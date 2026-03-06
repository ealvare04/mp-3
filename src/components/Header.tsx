import styled from "styled-components";

const StyledHeader = styled.header`
    border: 2px solid #25343f;
    background-color: #bfc9d1;
    padding: 3%;
    text-align: left;

    @media screen and (max-width: 750px) {
        text-align: center;
        padding: 5%;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Edison's Resume</h1>
            <p>An online website showcasing Edison's career</p>
        </StyledHeader>
    );
}