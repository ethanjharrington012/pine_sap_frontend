import React from 'react';
import { CarouselComponent } from '../Carousel1';
import { Navbar, Nav } from 'react-bootstrap';
import { NavbarComponent } from '../Navbar';
import { PreviousShows } from '../PreviouseShows/PreviouseShows';
import { Class } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';
import forest from '../../assets/images/forest.jpg'


const About: React.FC = () => {
  return (
    <div>
      <NavbarComponent />
      <div id='header'>
        <h1 className='intro1'>Welcome to PineSap</h1>
        <h5 className='intro2'>see your favorite artist</h5>
        </div>
      <div className="container">
        
        <CarouselComponent />
        <h2>Previous shows</h2>
        <div style={{ padding: '300px 0' }}>
          <PreviousShows />
        </div>
        {/* Other content */}
        <style>{`
            #header {
                text-align: center;
                padding-top: 75px;
                padding-bottom: 75px;
                background-image: url(${forest});
                background-size: cover;
                background-position: center bottom; 
                width: 100%;
                height: 200px;
                font-family: Georgia;
                color: white;
            }
            .container {
                padding-top: 50px;
                padding-bottom: 300px;
            }
            .intro1 {
                font-size: 50px;
                line-height: 1.2;
            }
            .intro2 {
                font-size: 24px;
                line-height: 1.2;
            }

        `}</style>
      </div>
    </div>
  );
};

export { About };
