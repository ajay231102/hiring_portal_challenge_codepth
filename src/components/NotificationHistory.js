// src/NotificationHistory.js
import React, { useState, useEffect } from 'react';
import './NotificationHistory.css';

const NotificationHistory = () => {
  const [notificationHistory, setNotificationHistory] = useState([]);

  // Simulated notification history (replace with actual data)
  useEffect(() => {
    // Fetch notification history from your server or storage
    const fakeNotificationHistory = [
      { id: 1, jobTitle: 'Software Engineer', applicantName: 'John Doe', timestamp: new Date().toLocaleString() },
      { id: 2, jobTitle: 'Data Analyst', applicantName: 'Jane Doe', timestamp: new Date().toLocaleString() },
      // Add more notifications as needed
    ];

    setNotificationHistory(fakeNotificationHistory);
  }, []);

  return (
    <div className="notification-history-container">
      <h1>Notification History</h1>
      <div className="history-list">
        {notificationHistory.map((notification) => (
          <div key={notification.id} className="history-item">
            <p>
              <strong>Job Title:</strong> {notification.jobTitle}
            </p>
            <p>
              <strong>Applicant Name:</strong> {notification.applicantName}
            </p>
            <p>
              <strong>Timestamp:</strong> {notification.timestamp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationHistory;
