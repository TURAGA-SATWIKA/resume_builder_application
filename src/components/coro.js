import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import './coro.css'
import ResumeImage1 from "./resume_image_1.jpg";
import ResumeImage2 from "./resume_image_2.jpg";
import ResumeImage3 from "./resume_image_3.jpg";

const ResumeCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const resumeImages = [ResumeImage1, ResumeImage2, ResumeImage3];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % resumeImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return resumeImages.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="coro">
      <div className="resume-carousel ">
        <img src={resumeImages[currentImageIndex]} alt={`Resume ${currentImageIndex + 1}`} style={{marginLeft:'20px',height:'200px'}}/>
        <br></br>
        <br></br>
        <button className="carousel-button" onClick={prevImage} style={{marginLeft:'100px'}}>
          Prev
        </button>
        <button className="carousel-button" onClick={nextImage}>
          Next
        </button>
      </div>
      <br></br>
      <Link to='/create-resume'><button className="create-cv-button" style={{marginLeft:'90px'}}>Create New CV</button></Link>
    </div>
  );
};

export default ResumeCarousel;
