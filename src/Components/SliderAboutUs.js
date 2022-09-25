import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dance from './dance.jpg'

export default function SliderAboutUs() {
 return (
  <div style={{  width: '100%',height:"80%",borderRadius:"4px"}}>
   <Carousel>
    <Carousel.Item interval={1500}>
     <img

      className="d-block w-100"
      src="https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2022-05/tabla2.jpg?itok=mXNKFarg"
      alt="First slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://www.worldmusicinstitute.org/wp-content/uploads/2022/07/Zakir-and-Niladri-photo-credit-Susana-Millman-1024x686.jpeg"
      alt="Third slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/rock-concert-cheering-crowd-in-front-of-bright-colorful-stage-lights-picture-id1305198154?s=612x612"
      alt="Third slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/nomads-plays-kamaycha-in-the-ghadisar-lake-in-jaisalmer-india-picture-id527910888?k=20&m=527910888&s=612x612&w=0&h=iDC96NlH_5K7P06clGx5iY2jg7YLKKJ-NeP9hVPVVUI="
      alt="Third slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://www.shutterstock.com/image-photo/adult-brunette-woman-dress-looking-600w-1033366606.jpg"
      alt="Third slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://www.shutterstock.com/image-photo/singer-holding-microphone-stand-performing-600w-1039242106.jpg"
      alt="Third slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/group-of-friends-dancing-at-a-concert-picture-id1331434818?s=612x612"
      alt="Third slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
    <Carousel.Item interval={1500}>
     <img
      className="d-block w-100"
      src={dance}
      alt="Third slide" height="156px" opacity="0.75"
     />
    </Carousel.Item>
   </Carousel>
  </div>
 );
}