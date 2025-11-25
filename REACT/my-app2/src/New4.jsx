import Carousel from 'react-bootstrap/Carousel';
import './New4.css'
import img1 from './components/images/1.png';
import img2 from './components/images/2.jpg';
import img3 from './components/images/3.jpg';

// React-Bootstrap 

function BasicExample() {
  return (
    <Carousel style={{width: '90%'}}>
      <Carousel.Item>
        <img src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BasicExample;
