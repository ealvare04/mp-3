import { Link } from "react-router";

export default  function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="index.html">Home</Link></li>
                <li><Link to="education.html">Education</Link></li>
                <li><Link to="experiences.html">Experiences</Link></li>
                <li><Link to="skills.html">Skills</Link></li>
                <li><Link to="projects.html">Projects</Link></li>
                <li><Link to="organizations.html">Organizations</Link></li>
            </ul>
        </nav>
    );
}