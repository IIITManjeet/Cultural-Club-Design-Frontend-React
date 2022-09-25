/*import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function Slider() {
 return (
  <section className='Slider'>
  <div className='container'>
  <Carousel>
   <Carousel.Item interval={1000}>
    <img
     className="d-block w-100"
     src="https://learn.podium.school/wp-content/uploads/2021/11/kuchipudi-andhra-pradesh-and-telangana.jpg"
     alt="First slide"
    />
    <Carousel.Caption>
     <h3>First slide label</h3>
     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item interval={500}>
    <img
     className="d-block w-100"
     src="holder.js/800x400?text=Second slide&bg=282c34"
     alt="Second slide"
    />
    <Carousel.Caption>
     <h3>Second slide label</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
    <img
     className="d-block w-100"
     src="holder.js/800x400?text=Third slide&bg=20232a"
     alt="Third slide"
    />
    <Carousel.Caption>
     <h3>Third slide label</h3>
     <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
     </p>
    </Carousel.Caption>
   </Carousel.Item>
  </Carousel>
  </div>
  </section>
 );
}*/


import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dance from './dance.jpg'

export default function Slider() {
 return (
  <div style={{ display: 'block', width: '960px', padding: 30, marginLeft: "auto", marginRight: "auto", borderRadius: "10px", overflow: "hidden" }}>
   <Carousel>
    <Carousel.Item interval={1500}>
     <img

      className="d-block w-100"
      src="https://media.istockphoto.com/photos/contemporary-female-dancers-on-stage-picture-id108127901?s=612x612"
      alt="First slide" height="500px" opacity="0.75"
     />
     <Carousel.Caption>
      <h3>Dance Competition</h3>
      <p >Held on 26 October 2021 in our auditorium block C Lucknow.</p>
     </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://wallpapercrafter.com/th800/242591-a-music-band-preparing-to-perform-live-in-the-subw.jpg"
      alt="Second slide" height="500px" opacity="0.75"
     />
     <Carousel.Caption>
      <h3>Singing Competition</h3>
      <p>Our Guest Performance by RK Band in our last singing contest</p>
     </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://www.artandculture.goa.gov.in/sites/default/files/styles/max_650x650/public/2020-09/676_gallery_4.jpg?itok=P9T2t29o"
      alt="Third slide" height="500px" opacity="0.75"
     />
     <Carousel.Caption>
      <h3>Art</h3>
      <p >
       Art Exhibition by our Club as tribute to Late Shri Deenanath Dalal
       <br />
       22 Oct 2021
       <hr />
      </p>
     </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://live.staticflickr.com/65535/52234964151_6b7fa42195_b.jpg"
      alt="Third slide" height="500px" opacity="0.75"
     />
     <Carousel.Caption>
      <h3>Literature</h3>
      <p>
       Literature Competition conducted by our Club
       <br />
       27 Oct 2021
       <hr />
      </p>
     </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src={dance}
      alt="Third slide" height="500px" opacity="0.75"
     />
     <Carousel.Caption>
      <h3>Dance</h3>
      <p>
       Literature Competition conducted by our Club
       <br />
       27 Oct 2021
       <hr />
      </p>
     </Carousel.Caption>
    </Carousel.Item>
   </Carousel>
  </div>
 );
}