import React from 'react';
import Base from '../../components/Base/Base';
import './HomePage.css';

function HomePage() {
  return (
    <Base>
      <header className="header">
        <h1>Welcome to OpenCloudSuite</h1>
        <p>Your ultimate solution for secure and efficient file storage and retrieval.</p>
      </header>
      <main className="main-content">
        <section>
          <h2>About OpenCloudSuite</h2>
          <p>OpenCloudSuite is a cutting-edge, microservices-based application designed to provide seamless file storage and retrieval. Our platform ensures your data is secure, accessible, and easy to manage.</p>
        </section>
        <section>
          <h3>Key Features</h3>
          <ul>
            <li>Secure Authentication</li>
            <li>Robust File Storage</li>
            <li>Comprehensive Metadata Management</li>
            <li>User Profile Customization</li>
            <li>API Gateway for Easy Integration</li>
            <li>Real-time Updates with Websocket Gateway</li>
          </ul>
        </section>
      </main>
    </Base>
  );
}

export default HomePage;