import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    resume: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.resume.trim()) {
      errors.resume = 'Resume is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const submitUrl = 'https://example.com/api/submitJobApplication';

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Job application submitted successfully:', result);

      setFormData({
        name: '',
        email: '',
        resume: '',
      });
    } catch (error) {
      console.error('Error submitting job application:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <div className="error">{formErrors.name}</div>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <div className="error">{formErrors.email}</div>}
      </label>
      <br />
      <label>
        Resume:
        <textarea
          name="resume"
          value={formData.resume}
          onChange={handleInputChange}
        />
        {formErrors.resume && <div className="error">{formErrors.resume}</div>}
      </label>
      <br />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
