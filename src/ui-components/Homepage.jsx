import React, { useEffect, useState } from 'react';
import Navbasics from './Navbasics';
import { Fakedatahome } from '../resource/Fakedatahome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"

const Homepage = () => {
  return (
    <div>
        <Navbasics />
        <Container style={{marginTop:"25px"}}>
            <Row>
               
                {Fakedatahome.map((item, index) => (
                     <Col>
                  <div key={index}>
                     <h2 style={{fontFamily:"roboto,serif",fontWeight:"300"}}>{item.Heading}</h2>
                      <img  style={{height:"100px"}} src={item.Image} alt={item.Heading} />
                     </div>
                  </Col>
                ))}
                
            </Row>
        </Container>

<Container style={{border:"1px solid black",width:"800px"}}>
<Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img style={{width:"500px"}}  src={bg1} alt="" text="First slide"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{width:"500px"}}  src={bg2} alt="" text="Second slide"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"500px"}}  src={bg1} alt="" text="Third slide"  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>
       
        
    </div>
  )
}

export default Homepage