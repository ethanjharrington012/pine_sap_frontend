import React from 'react';

interface FeatureProps {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
}

const Feature: React.FC<FeatureProps> = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="row row-with-image">
      <div className="col-12 col-md-4 col-image">
        <img src={image} alt="Image" />
      </div>
      <div className="col-12 col-md-4 col-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="col-12 col-md-4 col-button">
        <a href="#" className="btn btn-primary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

