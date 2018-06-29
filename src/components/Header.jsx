import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyles = {
    color: 'red'
  };

  return(
    <div style={headerStyles}>
      <h1 className="blue-bg">Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <style jsx>{`
          .blue-bg:hover {
            cursor: pointer;
            background: blue;
          }
      `}</style>
    </div>
  );
}

export default Header;
