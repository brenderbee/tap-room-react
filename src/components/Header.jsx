import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1 className="header">Tap Room Tracker</h1>
      <div className="nav">
        <Link to="/"><button>Keg List</button>
        </Link><Link to="/newkeg"><button>Add Keg</button></Link>
      </div>
      <style jsx>
        {`
          .header {
            border-radius: 10px;
            text-align: center;
            font-size: 2.4rem;
            padding: 1.6rem;
            border: 2px solid white;
          }

          .nav {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }

          button {
            height: auto;
            background: #349c34;
            border: none;
            margin-right: 1rem;
            margin-bottom: 2rem;
            border-radius: 10px;
            width: 250px;
            transition: background 0.3s ease;
          }

          button:hover {
            cursor: pointer;
            background: green;
          }
      `}
      </style>
    </div>
  );
}

export default Header;
