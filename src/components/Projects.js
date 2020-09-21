import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import manulife from "./images/manulife.jpg";
import syngli from "./images/syngli.png";
import goldenhack from "./images/goldenhack.png";
import reddit from "./images/redditoptimizer.png";
import profile from "./images/profile.JPG";
import chess from './images/chess.jpg';
import cards from './images/cards.png';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          title: "Cards Against Humanity Game",
          date: "Jan 2020 - Present",
          image: cards,
          tech: "React Native, JavaScript, HTML/CSS",
          description: (
            <p>
              Currently working on a Cards Against Humanity based mobile game after my friends and I realized
              that there is no such application suitable for mobile players. Follow the design here and 
              the development here.
            </p>
          ),
        },
        {
          title: "Personal Website v3.0",
          date: "August 2020 - Present",
          image: profile,
          tech: "React, JavaScript, HTML/CSS, Bootstrap",
          description: (<p>
              Third version of my personal website! Compared to V1, this site is much more clean and 
              includes better user experience. Follow the code process here.
            </p>),
        },
        {
            title: "Chess Game in C++",
            date: "Summer 2019",
            image: chess,
            tech: "C++",
            description: <p>
              Developed for an object oriented programming course at the University of Waterloo in 
              collaboration with 2 other students. 
            </p>,
          },
        {
          title: "Reddit Optimizer",
          date: "Hack the north 2019",
          image: reddit,
          tech: "React, HTML/CSS, JavaScript",
          description: <p>
              This project uses machine learning to determine the most optimal subreddits to place your posts to
              gain the most attraction. Created with 3 other hackers during hack the north. Was personally responsible
              for the entire front-end of the project
          </p>,
        },
      ],
    };
  }
  render() {
    return (
      <div style={experienceStyle}>
        <h1 style={{ textAlign: "center", paddingBottom: "10px" }}>Projects</h1>
        <CreateExperience item={this.state.experiences[0]} />
        <CreateExperience item={this.state.experiences[1]} />
        <CreateExperience item={this.state.experiences[2]} />
        <CreateExperience item={this.state.experiences[3]} />
      </div>
    );
  }
}

function CreateExperience(props) {
  return (
    <div style={{ padding: "20px 0 10px 0" }}>
      <Card style={{ borderRadius: "50px", border:"none" }}>
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
              <Card.Title style={{ fontSize: "1rem" }}>
                <b>{props.item.tech}</b>
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
  backgroundColor:'#b3c6cd', 
  height: "100%",
  padding: "4rem 7rem 2rem 7rem",
  fontFamily: "Inter",
};
