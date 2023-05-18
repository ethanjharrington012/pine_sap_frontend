import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import halloween from '../../assets/images/pinesap pics/isaac_ethan_scott.jpg'

import blur_isaac from '../../assets/images/blur_isaac.jpg'
import crowd from '../../assets/images/crowd_b&w.jpeg'
import vert_ethan from '../../assets/images/vert_e.jpg'
const CarouselComponent: React.FC = () => {
  return (
    <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={crowd}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={blur_isaac}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={halloween}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                id='vert_e'
                className="d-block w-100"
                src={vert_ethan}
                alt="First slide"
                />
            </Carousel.Item>
            {/* Add more carousel items as needed */}
            </Carousel>

            <style>{`
                /* Carousel Styles */
                .carousel-item {
                    height: 600px; /* Adjust the desired height */
                }
                .carousel-item img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                #vert_e {
                    object-fit: cover;
                    object-position: center; /* Position the image at the center */
                  }
            `}</style>
    </div>
  );
};

export { CarouselComponent };

