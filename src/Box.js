import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Box.css'; // Make sure to import the CSS file for styles

const ImageWithDescription = ({ imageUrl, description, subText }) => {

  const [shake, setShake] = useState(false);
    
  const animate = () => {
      
      // Button begins to shake
      setShake(true);
      
      // Buttons stops to shake after 2 seconds
      setTimeout(() => setShake(false), 2000);
      
  }

  const containerStyle = {
    cursor: 'pointer',
    marginBottom:'40px',
    transition: 'transform 0.3s ease-in-out',
  };

  const imageStyle = {
    width: '70vw', // Set your preferred width
    height: '70vw', // Set your preferred height
    maxWidth:'400px',
    maxHeight:'400px',
    objectFit:'cover'
  };

  const descriptionStyle = {
    fontFamily: 'Helvetica Neue, sans-serif',
    marginTop: '10px',
    fontSize: '25px',
    maxWidth:'90vw',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const subTextStyle = {
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: '16px',
    marginTop: '-20px',
    fontWeight: 'normal',
    textAlign: 'left',
  };

  return (
    <div style={containerStyle} onClick = {animate} className = {shake ? 'containerScale' : 'container'}>
      <img src={imageUrl} alt="" style={imageStyle} />
      <p style={descriptionStyle}>{description}</p>
      <p style={subTextStyle}>{subText}</p>
    </div>
  );
};

ImageWithDescription.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageWithDescription;