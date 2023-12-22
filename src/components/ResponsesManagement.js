import React, { useState } from 'react';
import './ResponsesManagement.css';

const ResponsesManagement = () => {
    // eslint-disable-next-line no-unused-vars
  const [responses, setResponses] = useState([
    { id: 1, applicant: 'John Doe', email: 'john@example.com', resume: 'https://example.com/john-resume', coverLetter: 'Lorem ipsum...' },
    { id: 2, applicant: 'Jane Doe', email: 'jane@example.com', resume: 'https://example.com/jane-resume', coverLetter: 'Lorem ipsum...' },
  ]);

  return (
    <div className="responses-management-container">
      <h1>Responses for Job Listing</h1>
      <div className="responses-list">
        {responses.map((response) => (
          <div key={response.id} className="response-item">
            <h2>{response.applicant}</h2>
            <p>Email: {response.email}</p>
            <p>
              Resume: <a href={response.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
            </p>
            <p>Cover Letter: {response.coverLetter}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsesManagement;
