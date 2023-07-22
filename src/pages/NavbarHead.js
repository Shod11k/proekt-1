import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import navimg from './Group (3).png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsChevronDown } from 'react-icons/bs';
export default class NavbarHead extends Component {
  render() {

    return (
      <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={navimg} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
           <button className='btnnav1'  >BARCHA KURSLAR <BsChevronDown /></button>
         <select className='select1'>
             <option>UZBEK</option>
             <option>Rus</option>

             </select>
             <button className='btnnav2'>Kirish</button>
       
        
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
