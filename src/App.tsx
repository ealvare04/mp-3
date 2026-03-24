import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes, createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Education from "./components/mains/Education.tsx";
import Home from "./components/mains/Home.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Skills from "./components/mains/Skills.tsx";
import Organizations from "./components/mains/Organizations.tsx";
import Projects from "./components/mains/Projects.tsx";
import styled from "styled-components";


const StyledWrapper=styled.div`
    width: 80vw;
    margin: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    font-family: Georgia, serif;
    font-size: calc(2px + 2vh);
`;

const StyledNavMain = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const StyledMain = styled.main`
    border: 2px solid #25343f;
    
    width: 70%;
    background-color: #EAEFEF;
    padding: 5%;

    margin: auto;
    text-align: center;
    
    h2 {
        padding: 3%;
        text-decoration: underline;
    }
    
    img {
        border: 6px solid #25343F;
        max-width: 80%;
    }
    
    ul {
        padding-left: 0;
        list-style: none;
    }
    
    li {
        padding: 3%;
    }
    
    p {
        width: 85%;

        margin: 5% auto;
        text-align: center;

        padding: 2%;
    }
    
    h3 {
        text-decoration: underline;
    }
    
    @media (max-width: 750px) {
        width: 100%;
    }
`

function Root(){
    return(
        <StyledWrapper>
            <Header />
                <StyledNavMain>
                    <Nav/>
                    <Outlet/>
                </StyledNavMain>
            <Footer/>
        </StyledWrapper>
    );
}

/* previously tried using Outlet using documentation below */

/* https://reactrouter.com/api/declarative-routers/BrowserRouter */
/* https://reactrouter.com/api/components/Outlet */

const router=createBrowserRouter([
    {
        path:"/", Component:Root,
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/education",
                element: <Education/>
            },
            {
                path: "/experiences",
                element: <Experiences/>
            },
            {
                path: "/skills",
                element: <Skills/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/organizations",
                element: <Organizations/>
            },

        ],
    },
]);


export default function App() {
    return (
        <><RouterProvider router={router}/></>
    )
}
