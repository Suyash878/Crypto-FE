import React from 'react';
import './loading.css'; // Make sure to create a corresponding CSS file

export default function Loading() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-header"></div>
      <div className="skeleton-content">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
}