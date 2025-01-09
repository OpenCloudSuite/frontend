import React from 'react';
import Base from '../../components/Base/Base';
import './Drive.css';

function Drive() {
  return (
    <Base>
      <div className="drive-container">
        <aside className="sidebar">
          <ul>
            <li><a href="#">My Drive</a></li>
            <li><a href="#">Shared with me</a></li>
            <li><a href="#">Recent</a></li>
            <li><a href="#">Trash</a></li>
          </ul>
        </aside>
        <main className="main-content">
          <header className="drive-header">
            <h1>My Drive</h1>
            <button className="upload-btn">Upload</button>
          </header>
          <section className="file-grid">
            {/* Placeholder for files */}
            <div className="file-item">File 1</div>
            <div className="file-item">File 2</div>
            <div className="file-item">File 3</div>
            <div className="file-item">File 4</div>
          </section>
        </main>
      </div>
    </Base>
  );
}

export default Drive;