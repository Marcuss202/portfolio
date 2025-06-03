import Navbar from '../components/Navbar.jsx'
import Personality from '../components/Personality.jsx'


function About() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                    <img
                        src="../MarkussOzolsAbout.jpeg"
                        alt="Profile"
                        className="img-fluid shadow "
                    />
                    </div>
                    <div className="col-md-6">
                    <h1 className="mb-3 mt-lg-0 mt-2">About Me</h1>
                    <p>
                        Hi, I'm Marcuss! I'm a full-stack developer passionate about
                        building web applications and exploring game development. I love
                        working with React for the frontend and Django for the backend,
                        ensuring dynamic and scalable solutions.
                    </p>
                    <p>
                        Besides coding, I'm also a drummer and enjoy creating music with my
                        band. My goal is to keep learning and improving, always striving to
                        make cool and useful projects.
                    </p>
                    <a href="/contacts/" className="btn mainButton mt-3">
                        Contact Me
                    </a>
                    <a href="/contacts/" className="btn mainButton mt-3 ps-3 LaumasButton">
                        LAUMAS PRESENT
                    </a>
                    </div>
                </div>
            </div>
            {/* <Personality /> */}
        </>
    )
}

export default About