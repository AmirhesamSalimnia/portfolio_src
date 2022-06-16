import React from "react";

import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const ProjectBox = ({value}) => {
  const {
    name,
    img,
    description,
    specfic,
    repo_url,
    time,
  } = value;
  return (
    <Col md={12}>
    <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
    <Card.Img variant="Left" src={img}/>
      <Card.Body>
        <Card.Title as="h4">{name || <Skeleton />} 
        {(!repo_url)?"":
          <a
            href={repo_url}
            target=" _blank"
            className="text-dark text-decoration-none"
          >
            <span className="text-dark card-link ml-4">
              <i className="fab fa-github" />
            </span>
          </a>
        }
        </Card.Title>
        <Card.Text>{(!description)?"":description || <Skeleton count={3} />} </Card.Text>
        <hr />
        <div className="pb-3">
          {specfic.length ? specfic.map(txt => <div className="badge badge-light">{txt}</div>) : "code yet to be deployed."}
        </div>

        {(!time)?"": <small className="text-muted">{time}</small>}
        
      </Card.Body>
    </Card>
  </Col>
  )
}

const SelectedProject = ({heading, projects_arr}) => {

  return (
    <Jumbotron fluid id="selected_projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projects_arr.length
            ? projects_arr.map((project, index) => (
                <ProjectBox
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : "here"}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default SelectedProject;