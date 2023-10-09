import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import uiproject from "../assets/img/uiproject1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ecompproject from "../assets/img/ecomproject.png";
import foodproject from "../assets/img/foodproject.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: ecompproject,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: foodproject,
    },
    {
      title: "UI Project",
      description: "Design & Development",
      imgUrl: uiproject,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore my project showcase! From web development to design,
                    I've brought ideas to life. Dive into my work and see how I
                    can elevate your next project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          As a member of the CX-development team, I've
                          contributed to building robust enterprise-level
                          products, aligning them with Cisco's design and
                          architecture principles. My efforts resulted in a
                          remarkable 16.04% YoY revenue increase, reaching
                          $15.203B in Q3 2023. I played a pivotal role in system
                          requirement identification, partner dependency
                          understanding, and spearheaded software testing to
                          ensure top-quality, user-friendly experiences.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          As a member of the CX-development team, I've
                          contributed to building robust enterprise-level
                          products, aligning them with Cisco's design and
                          architecture principles. My efforts resulted in a
                          remarkable 16.04% YoY revenue increase, reaching
                          $15.203B in Q3 2023. I played a pivotal role in system
                          requirement identification, partner dependency
                          understanding, and spearheaded software testing to
                          ensure top-quality, user-friendly experiences.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
