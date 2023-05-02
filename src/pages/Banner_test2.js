import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/flutter.png'}
          alt="First slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/db.png'}
          alt="Second slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/dl.png'}
          alt="Third slide"
        />

        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;