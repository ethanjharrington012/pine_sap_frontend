import React from 'react';
import log_analog from '../../assets/images/log_analog.png';

const Footer: React.FC = () => {
  return (
    <footer className="row" id="footer">
      <div className="col-2">
        <div className="footer-text-flex">
          <h4>Platform</h4>
          <p>Why Pine Sap</p>
          <p>The pine sap project</p>
          <p>Donate</p>
          <p>Spread The Word</p>
          <p>Our Process</p>
        </div>
      </div>
      <div className="col-2">
        <div className="footer-text-flex">
          <h4>Platform</h4>
          <p>Why Pine Sap</p>
          <p>The pine sap project</p>
          <p>Donate</p>
          <p>Spread The Word</p>
          <p>Our Process</p>
        </div>
      </div>
      <div className="col-2">
        <div className="footer-text-flex">
          <h4>Platform</h4>
          <p>Why Pine Sap</p>
          <p>The pine sap project</p>
          <p>Donate</p>
          <p>Spread The Word</p>
          <p>Our Process</p>
        </div>
      </div>
      <div className="col-2">
        <div className="footer-text-flex">
          <h4>Platform</h4>
          <p>Why Pine Sap</p>
          <p>Donate</p>
          <p>Spread The Word</p>
          <p>Our Process</p>
        </div>
      </div>
      <div className="col-2" id="foot_pic">
        <div className="footer-text-flex">
          <img 
          src={log_analog} 
          alt="Pine Sap Logo_analog" 
          id="log_ana"
          style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '100%', height: '100%' }} />
        </div>
      </div>
      <style>{`
        /* Footer Styles */
        #footer {
          padding: 20px;
          background-color: #f1f1f1;
        }

        .footer-text-flex {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-text-flex h4 {
          margin-bottom: 10px;
        }

        .footer-text-flex p {
          margin: 5px 0;
        }

        #log_ana {
          height: 300px;
          width: 400px;
        }
      `}</style>
    </footer>
  );
};

export {Footer};
