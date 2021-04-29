import React from 'react';

export const GoogleButton = ({ onClick }) => {
  return (
    <div className="google-btn" onClick={onClick}>
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google button"
        />
      </div>
      <p className="btn-text">Sign in with google</p>
    </div>
  );
};
