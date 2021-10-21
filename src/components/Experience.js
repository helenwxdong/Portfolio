import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import manulife from "./images/manulife.jpg";
import ix from "./images/IX.jpg";
import zynga from "./images/zynga.jpg";
import syngli from "./images/syngli.png";
import goldenhack from "./images/goldenhack.png";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";

export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      experiences: [
        {
          title: "Software Engineer",
          date: "Sep 2021 - Present",
          company: "Zynga",
          image: zynga,
          description: (
            <p>
              I am currently doing mobile game development for Zynga. I use <b>React Native</b> 
              to develop IOS and Android features for the Words With Friends game. Keep an eye out
              for their new Clubs feature which I am currently helping develop ;)
            </p>
          ),
        },
        {
          title: "Software Engineer",
          date: "Jan 2021 - May 2021",
          company: "Index Exchange",
          image: ix,
          description: (
            <p>
              One of my most enjoyable co-ops was implementing backend features 
              in <b>Go</b> at Index Exchange. I enjoyed the impact that my work had on the company despite 
              only being an intern. During my work term, I programmed a method of reclassifying missing domains
              which resulted in a <b>40% increase in domains being categorized</b>. I also worked on the core system 
              by implementing GDPR regulations into the legacy code which resulted in an <b>increase
              of 300,000 bid requests processed and anonymized per week</b>. I was able to work on
              front-end tasks as well in <b>React</b> and <b>Angular</b> and gained experience using
              <b> Docker</b> and <b>Ansible</b>.
            </p>
          ),
        },
        {
          title: "Full Stack Software Engineer",
          date: "Jan 2020 - May 2020",
          company: "Manulife",
          image: manulife,
          description: (
            <p>
              In my second co-op, I helped solve problems for internal
              employees at Manulife with a team of other co-ops. I developed multiple features using 
              <b> React, Node, Express, SQL</b>. During this internship, I had alot of autonomy and 
              was able to learn many things by myself. Within the team, I improved my problem solving skills
              and leadership skills through <b>leading the team through the design and development of full stack features</b>. I really
              enjoyed the product management aspect of taking a user's painpoint and creating and developing a
              solution. However, due to the team being composed purely of co-ops, I was missing guidance
              from a senior software engineer on how to better improve my code.
            </p>
          ),
        },
        {
          title: "Business and Front End Developer",
          date: "Jan 2019 - April 2019",
          company: "Syngli Inc",
          image: syngli,
          description: (
            <p>
              My first co-op was mostly a business role but I was also able to do some front-end work. My
              favourite project was{" "}
              <b>designing and coding <a href="https://www.syngli.com/"> their home page </a>which is still being used right now</b>. During
              my interview with the company, I critiqued the website as being poor in user experience which lead me to take on this project. This was
              challenging yet very enjoyable as it was my first time designing a
              complete website and coding it in <b>JavaScript, HTML/CSS, PHP</b>
              . I also developed a go-to marketing plan and advertising campaign
              for Syngli in addition to fixing bugs on the website.
            </p>
          ),
        },
      ],
    };
  }

  CreateLayout = () => {
    const isDesktop = useMediaQuery({
      query: "(min-width: 700px)",
    });
    const isMobile = useMediaQuery({
      query: "(max-width: 699px)",
    });
    return (
      <div>
        {isDesktop && (
          <div style={experienceStyle}>
            <h1 style={{ textAlign: "center", paddingBottom: "10px" }} id = "experience">
              Work Experience
            </h1>
            <CreateExperience item={this.state.experiences[0]} />
            <CreateExperience item={this.state.experiences[1]} />
            <CreateExperience item={this.state.experiences[2]} />
            <CreateExperience item={this.state.experiences[3]} />
          </div>
        )}
        {isMobile && (
          <div style={mobileStyle}>
            <h1 style={{ textAlign: "center", paddingBottom: "10px" }} id = "experience">
              My Work
            </h1>
            <CreateExperience item={this.state.experiences[0]} />
            <CreateExperience item={this.state.experiences[1]} />
            <CreateExperience item={this.state.experiences[2]} />
            <CreateExperience item={this.state.experiences[3]} />
          </div>
        )}
      </div>
    );
  };

  render() {
    return <this.CreateLayout></this.CreateLayout>;
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
                style={{ borderRadius: "50%", width: "200px" }}
              />
            </div>
            <div class="col">
              <Card.Title style={{ fontSize: "25px" }}>
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

const mobileStyle = {
  height: "100%",
  padding: "42rem 10px 2rem 10px",
  fontFamily: "Inter",
};
