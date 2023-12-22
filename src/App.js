// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';
import JobListingForm from './components/JobListingForm';
import JobDetails from './components/JobDetails';
import JobApplicationForm from './components/JobApplicationForm';
import ResponsesManagement from './components/ResponsesManagement';
import NotificationHistory from './components/NotificationHistory';
import JobListings from './components/JobListingForm';
/* eslint-disable no-unused-vars */
import firebase, { auth, messaging, getToken } from './firebase';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <p>Please log in to view this page.</p>
      }
    />
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    messaging
      .requestPermission()
      .then(() => getToken())
      .catch((error) => console.error('Error getting notification permission:', error));

    messaging.onMessage((payload) => {
      console.log('Notification received:', payload);
      setNotification(payload.notification);
    });

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isAuthenticated && (
              <React.Fragment>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </React.Fragment>
            )}
            {isAuthenticated && (
              <React.Fragment>
                <li>
                  <Link to="/create-listing">Create Job Listing</Link>
                </li>
                <li>
                  <Link to="/job-details">Job Details</Link>
                </li>
                <li>
                  <Link to="/apply">Apply for Job</Link>
                </li>
                <li>
                  <Link to="/responses">Responses Management</Link>
                </li>
                <li>
                  <Link to="/history">Notification History</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>

        {notification && (
          <div className="notification">
            <p>{notification.title}</p>
            <p>{notification.body}</p>
          </div>
        )}

        <Route path="/login" render={(props) => <Login {...props} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/create-listing" component={JobListingForm} isAuthenticated={isAuthenticated} />
        <Route path="/job-details" component={JobDetails} />
        <Route path="/apply/:listingId" component={JobApplicationForm} />
        <PrivateRoute path="/responses" component={ResponsesManagement} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/history" component={NotificationHistory} isAuthenticated={isAuthenticated} />
        <Route path="/listings" component={JobListings} />
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
      </div>
    </Router>
  );
}

export default App;
