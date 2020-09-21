import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import smile from './images/smile.JPG';
import Image from "react-bootstrap/Image";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        aboutText: (
            <div>
            <p>Hi, my name is Helen Dong! I'm a 4th year Computer Science and BBA student completing a double degree program
                with the Unversity of Waterloo and Wilfrid Laurier University. 
                </p>
                <p>
                I like to consider myself a software engineer with a passion for UX design.
                Throughout my undergrad and co-ops, I worked with many languages -- including React, C++, JavaScript, and so on.
                I also developed an interest in user experience. I believe that even as engineers, it is crucial that I
                understand, take part in, and support the design of my work. Due to my interests, I have also designed multiple
                solutions in addition to developing them. 
                </p>
                <p>
                At core, I think of myself as a quick learner, problem solver, and collaborator.
                Outside of school and work, I love rock climbing, drawing, and modelling.
            </p>
            </div>
        ),
    };
  }
  render() {
    return (
      <div style={experienceStyle}>
          <div class="row">
          <div class="col-lg-4">
          <Image
                src={smile}
                style={{ borderRadius: "5%", width: "290px" }}/>
                </div>
        <div class="col">
            <h3 style={{paddingBottom:'2rem', fontStyle:'italic'}}>Software Engineer with a passion for UX</h3>
            <p>{this.state.aboutText}</p>
        </div>
        </div>
      </div>
    );
  }
}

const experienceStyle = {
  height: "100%",
  padding: "5rem 7rem 2rem 7rem",
  fontFamily: "Inter",
};
