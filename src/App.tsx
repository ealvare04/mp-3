import Header from "./components/Header.tsx";
import Nav from "./components/Nav";
import Footer from "./components/Footer.tsx";
import {createBrowserRouter, Route, Routes, RouterProvider} from "react-router";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Organizations from "./components/mains/Organizations.tsx";
import Skills from "./components/mains/Skills.tsx";
import Projects from "./components/mains/Projects.tsx";

function Root() {
    return (
      <>
          <Header/>
          <Nav/>
            <Routes>
                <Route
                    path={`/`}
                    element={<Home/>}
                />
                <Route
                    path={`/education.education.html`}
                    element={<Education/>}
                />
                <Route
                    path={`/experiences/experiences.html`}
                    element={<Experiences/>}
                />
                <Route
                    path={`/organizations/organizations.html`}
                    element={<Organizations/>}
                />
                <Route
                    path={`/skills/skills.html`}
                    element={<Skills/>}
                />
                <Route
                    path={`/projects/projects.html`}
                    element={<Projects/>}
                />
            </Routes>
          <Footer/>
      </>
    );
}

const router=createBrowserRouter(
    [{path:"*", Component:Root}]
)

export default function App() {
      return (
        <>
            <RouterProvider router={router}/>
        </>
      )
    }