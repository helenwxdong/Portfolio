import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import manulife from "./images/manulife.jpg";
import syngli from "./images/syngli.png";
import goldenhack from "./images/goldenhack.png";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          title: "Full Stack Software Engineer",
          date: "Jan 2020 - May 2020",
          company: "Manulife",
          image: manulife,
          description: (
            <p>
              In my second co-op, I helped solve problems for internal
              employees. Our tech stack for our web apps are:
              <b> React, Node, Express, SQL</b>. My coworkers called me a{" "}
              <b>"front-end expert"</b> -- I definitely do not consider myself
              an expert 😋 but my greatest strengths in the team were my
              front-end knowledge and problem solving skills. Therefore, I took
              on many projects that involved designing features to solve a
              painpoint and programming the features before delivering my work
              to the users to test and receive feedback.
            </p>
          ),
        },
        {
          title: "Business and Front End Developer",
          date: "Jan 2019 - April 2019",
          company: "Syngli Inc",
          image: syngli,
          description: (<p>
              My first co-op was a cool mix between business and tech. My
              favourite project is{" "}
              <b>designing and coding the current website homepage</b>. During
              my interview with the company, I critiqued the website as lacking
              in user experience which lead me to take on this project. This was
              challenging yet very enjoyable as it was my first time designing a
              complete website and coding it in <b>JavaScript, HTML/CSS, PHP</b>
              . I also developed a go-to marketing plan and advertising campaign
              for Syngli in addition to fixing bugs on the website.
            </p>),
        },
        {
          title: "UX Developer",
          date: "Jan 2020 - Present",
          company: "the GoldenHack (Wilfrid Laurier University)",
          image: goldenhack,
          description: <p>
              GoldenHack is Laurier's new hackathon. <b>I lead the redesign of the goldenHack website</b> to 
              be more clean, professional, and interactive.{" "}
              I prototyped the designs on <b>Figma</b> and edited the designs after user testing to ensure 
              the best experience for the user.
          </p>,
        },
      ],
    };
  }
  render() {
    return (
      <div style={experienceStyle}>
        <h1 style={{ textAlign: "center", paddingBottom: "10px" }}>My Work</h1>
        <CreateExperience item={this.state.experiences[0]} />
        <CreateExperience item={this.state.experiences[1]} />
        <CreateExperience item={this.state.experiences[2]} />
      </div>
    );
  }
}

function CreateExperience(props) {
  return (
    <div style={{ padding: "20px 0 10px 0" }}>
      <Card style={{ borderRadius: "50px", borderWidth: "7px" }}>
        <Card.Body>
          <div class="row">
            <div class="col-lg-3">
              <Image
                src={props.item.image}
                style={{ borderRadius: "50%", width: "200px" }}/>
            </div>
            <div class="col">
              <Card.Title style={{fontSize:'25px'}}>
                {props.item.title}
              </Card.Title>
              <Card.Title>
                <b>{props.item.company}</b>
              </Card.Title>
              <Card.Title style={{ fontSize: "1rem" }}>
                {props.item.date}
              </Card.Title>
              <Card.Text>{props.item.description}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const experienceStyle = {
  height: "100%",
  padding: "42rem 7rem 2rem 7rem",
  fontFamily: "Inter",
};