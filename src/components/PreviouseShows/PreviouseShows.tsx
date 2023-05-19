import React, { useState } from 'react';
import { getToken } from '../../spodifyApi/server';
import { playSongSnippet } from '../../spodifyApi/server';
import angy from '../../assets/images/blur_isaac.jpg';
import angus from '../..//assets/images/IMG-9717.jpg';
import uncle_spudd from '../../assets/images/spuddy.jpg';
import scoby from '../../assets/images/scoby.jpg';
import spuddy2 from '../../assets/images/spuddy2.png';
import angus2 from '../../assets/images/angus2.png';
import scoby2 from '../../assets/images/scoby2.png';

const PreviousShows: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  const clickedEvent = async (imgIndex: number,track:string) => {


    await playSongSnippet(track);
  };

  
  return (
    <div>
      <div className="row-with-image">
      <div className="col-image">
        <img src={isHovered ? scoby2 : scoby} 
        alt="Previous Show 1" 
        className="image" 
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
        onClick={() => clickedEvent(0, "Cellar Smeller")} />
      </div>
      <div className="col-content">
        <h4 className="title"><em>-Scoby-</em></h4>
        <p className="description">Math Rock And MEth.<br/> If you Like Metal Riffs With Some Funky Bass and syncopated drums, you will love this
        Health Drink Titled band!<br/><strong><small><i>[Click image to listen]</i></small></strong></p>
      </div>
      <div className="col-button">
        <a href="https://open.spotify.com/artist/3Plgwg9HK6XVHXAoNRK3EK?si=FwTAcrEsSYma0PdoShDckw" className="btn">Scobys Spotify</a>
      </div>
    </div>
      {/* Repeat the above structure for additional rows of previous shows */}

      
      {/* Repeat the above structure for additional rows of previous shows */}
      
      
      <div className="row-with-image">
        <div className="col-image">
          <img 
            src={isHovered ? spuddy2 : uncle_spudd}
            alt="Previous Show 2"
            className="image"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
            onClick={() => clickedEvent(0,"Moxie Is Better Than Coca-Cola")} />
        </div>
        <div className="col-content">
          <h4 className="title"><em>-Uncle Spudd-</em></h4>
          <p className="description">Indie Punk Band based out of Snowhegan. Spudd Has sounds
          from Beach Indie Rock Like "Happy Hippy" to staight Hardcore like: "Meet the Robinsons" They are a must see!<br/><strong><small><i>[Click image to listen]</i></small></strong></p>
        </div>
        <div className="col-button">
          <a href="https://open.spotify.com/artist/4zjzCETsLNMoGUbj4yDf9q?si=qVGPHLlYRsyNxakdd7qxlA" className="btn">Spudds Spotify</a>
        </div>
      </div>

      <div className="row-with-image">
        <div className="col-image">
          <img src={isHovered ? angus2 : angus} 
          alt="Previous Show 2" 
          className="image" 
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
          onClick={() => clickedEvent(0,"greasepaw the explorer")}/>
        </div>
        <div className="col-content">
          <h4 className="title"><em>-AngusIsDead(one word)-</em></h4>
          <p className="description">Goblin Rock<br/>Using a 12 string. This band is very fun. Danceble, thrashable chord progressions. go listen to AngusIsDead<br/><strong><small><i>[Click image to listen]</i></small></strong></p>
        </div>
        <div className="col-button">
          <a href="https://open.spotify.com/artist/0kYtDjCXOn0mCfvujrDENu?si=Ycm1mqa7Rv2V9kwYXnMv-A" className="btn">AngusIsDead Spotify</a>
        </div>
      </div>

      <style>{`
        .row-with-image {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }
          
          .col-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .col-image img {
            width: 300px;
            height: 250px;
            object-fit: cover;
          }
          
          .col-content {
            flex: 2;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .col-button {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }
          
          .title {
            text-align: center;
          }
          
          .description {
            text-align: center;
          }
          
          .btn {
            background-color: black;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
          }
          
          .btn:hover {
            background-color: darkgreen;
      `}</style>
    </div>
  );
};

export { PreviousShows };
