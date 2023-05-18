import React from 'react';
import angy from '../../assets/images/blur_isaac.jpg'
import angus from '../..//assets/images/IMG-9717.jpg'
import uncle_spudd from '../../assets/images/spuddy.jpg'
import scoby from '../../assets/images/scoby.jpg'

const PreviousShows: React.FC = () => {
  return (
    <div>
      <div className="row-with-image">
        <div className="col-image">
          <img src={scoby} alt="Previous Show 1" className="image" />
        </div>
        <div className="col-content">
          <h4 className="title">-Scoby-</h4>
          <p className="description">Math Rock And MEth</p>
        </div>
        <div className="col-button">
          <a href="/show1" className="btn">Learn More</a>
        </div>
      </div>
      
      {/* Repeat the above structure for additional rows of previous shows */}
      
      
      <div className="row-with-image">
        <div className="col-image">
          <img src={uncle_spudd} alt="Previous Show 2" className="image" />
        </div>
        <div className="col-content">
          <h4 className="title">-Uncle Spudd-</h4>
          <p className="description">not your moms average punk band</p>
        </div>
        <div className="col-button">
          <a href="/show2" className="btn">Learn More</a>
        </div>
      </div>

      <div className="row-with-image">
        <div className="col-image">
          <img src={angus} alt="Previous Show 2" className="image" />
        </div>
        <div className="col-content">
          <h4 className="title">-AngusIsDead(one word)-</h4>
          <p className="description">Goblin Rock bitches</p>
        </div>
        <div className="col-button">
          <a href="/show2" className="btn">Learn More</a>
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
