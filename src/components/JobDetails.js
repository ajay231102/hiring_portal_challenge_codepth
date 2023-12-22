// src/JobDetails.js
import React from 'react';
import './JobDetails.css';

const JobDetails = () => {
  // Dummy job details for demonstration
  const jobDetails = {
    title: 'Software Engineer',
    description: 'Exciting software engineering position.',
    location: 'Remote',
    jobLink: 'https://example.com/apply',
  };

  return (
    <div className="job-details-container">
      <h1>{jobDetails.title}</h1>
      <p>{jobDetails.description}</p>
      <p>Location: {jobDetails.location}</p>
      <a href={jobDetails.jobLink} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
};

export default JobDetails;
