import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import cutout from './images/NewCutout4.jpg';
import Image from 'react-bootstrap/Image';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import resume from './Resume.pdf';
import instagram from './images/instagram.png';
import Form from 'react-bootstrap/Form';
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive'

export default class Main extends Component {
    render() {
        return (
            <div>
            <div style={divStyle} class="float-right">
    <Card style={{background:'transparent',border:'none',}}>
    <Card.Body>
   <br/><br/><br/>
   <MediaQuery minWidth={1024}> 
   <h1 style={{fontSize:'5rem'}}> Hi I'm <b>Helen</b> </h1>
        <h2> I'm a software engineer who cares <br/> about UX.</h2><br/>
     <h2>Let's talk.</h2><br/>
     </MediaQuery>
     <MediaQuery minWidth={700} maxWidth={1023}>
        <h1 style={{fontSize:'3.5rem'}}> Hi I'm <b>Helen</b> </h1>
        <h3> I'm a software engineer who<br/> cares about UX.</h3><br/>
     <h3>Let's talk.</h3><br/>
     </MediaQuery>
     <MediaQuery minWidth={300} maxWidth={699}>
        <h1 style={{fontSize:'3.5rem', color:'white'}}> Hi I'm <b>Helen</b> </h1>
        <h3 style={{color:'white'}}> I'm a software engineer who cares <br/> about UX.</h3><br/>
     <h3 style={{color:'white'}}>Let's talk.</h3><br/>
     </MediaQuery>
     <Form.Row>
     <a href={resume} style={logoStyle}><b style={{fontSize:'20px'}}>Resume</b></a> 
     <a href="https://www.linkedin.com/in/helenwxdong/" style={logoStyle}><Image src={linkedin} style={{height:'30px'}}/> </a> 
     <a href="https://github.com/helenwxdong" style={logoStyle}><Image src={github} style={{height:'30px'}}/></a>
     <a href="https://www.instagram.com/_helenistic_/" style={logoStyle}><Image src={instagram} style={{height:'30px'}}/></a>
     </Form.Row>
    </Card.Body>
    </Card>
            </div>
            </div>
        )
    }
}



const logoStyle = {
    padding: "0px 8px 0px 8px",
    size: "100",
    color: "black"
}

const divStyle = {
    fontFamily: 'Inter',
    padding:"50px 150px 70px 100px", 
    backgroundColor:'#b3c6cd', 
    background:cutout, 
    width:"100%",
    backgroundImage: `url(${cutout})`,
    height:'600px',
    backgroundRepeat: "no-repeat",
    backgroundSize: '50rem',
    backgroundPosition:'right'
}
