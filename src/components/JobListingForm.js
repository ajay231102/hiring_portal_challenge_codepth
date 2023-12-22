import React, { useState } from 'react';
import './JobListingForm.css';

const JobListingForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleCreateListing = async () => {
    try {
      
      console.log('Job Listing Created:', { title, description, location });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="job-listing-form-container">
      <h1>Create Job Listing</h1>
      <div className="form-container">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleCreateListing}>Create Listing</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default JobListingForm;
