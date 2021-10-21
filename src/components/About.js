import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import smile from "./images/smile.JPG";
import Image from "react-bootstrap/Image";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutText: (
        <div>
          <p>
            I'm a 4th year Computer Science and BBA
            student completing a double degree program with the Unversity of
            Waterloo and Wilfrid Laurier University. I am graduating in August 2022
            so I'm currently searching for full time Software Engineering or Product related roles.
          </p>
          <p>
            I do what I do because I like solving problems for people. There's nothing better than seeing
            your work rolled out and knowing that it's making a difference to someone else. My goal at the moment is to learn 
            as much as I can to hone my skills as a software engineer but my long term goal is to become a manager. 
          </p>
          <p>
            My least favourite thing about being a software engineer is how it hurts my back. If you know of any good solutions
            to ease back pain, please let me know and I will be forever thankful.
          </p>
          <p>
            I'm great at collaboration, I love learning, and I love taking risks. During my internships, I have moderated events and given a 
            presentation to the entire engineering team on how to give better demos.
          </p>
          <p>In my spare time, I like rock climbing, dancing, and hiking. A fun fact about me is that I am currently living in British Columbia.</p>
        </div>
      ),
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
      <div id="aboutme">
        {isDesktop && (
          <div style={experienceStyle}>
            <div class="row">
              <div class="col-lg-4">
                <Image
                  src={smile}
                  style={{ borderRadius: "5%", width: "290px" }}
                />
              </div>
              <div class="col">
                <h3 style={{ paddingBottom: "2rem", fontStyle: "italic" }}>
                  Hi, thanks for stopping by!
                </h3>
                <p>{this.state.aboutText}</p>
              </div>
            </div>
          </div>
        )}

        {isMobile && (
          <div style={mobileStyle}>
            <div class="row">
              <div class="col-lg-4">
                <Image
                  src={smile}
                  style={{ borderRadius: "5%", width: "290px" }}
                />
              </div>
              <div class="col">
                <h3 style={{ paddingBottom: "2rem", fontStyle: "italic" }}>
                  Software Engineer with a passion for UX
                </h3>
                <p>{this.state.aboutText}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  render() {
    return <this.CreateLayout></this.CreateLayout>;
  }
}

const experienceStyle = {
  height: "100%",
  padding: "5rem 7rem 2rem 7rem",
  fontFamily: "Inter",
};
const mobileStyle = {
  height: "100%",
  padding: "5rem 10px 2rem 10px",
  fontFamily: "Inter",
};
