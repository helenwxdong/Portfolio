import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from './images/logo.jpeg';

export default class NavMain extends Component {
    render() {
        return (
          <Navbar fixed="top" style={{backgroundColor:'#b3c6cd', paddingLeft:"50px", paddingRight:"50px"}}>
          <Navbar.Brand href="#home"><Image src={logo} style={{height:'30px'}}/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#features">Experiences</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">About Me</Nav.Link>
          </Nav>
        </Navbar>
        )
    }
}