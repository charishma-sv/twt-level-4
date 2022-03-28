import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      Home
      <div>
        <Link to="login">
          <div className="btn btn-primary mt-2 ">Login</div>
        </Link>
      </div>
      <div>
        <div className="btn btn-primary mt-2">SignUp</div>
      </div>
    </div>
  );
};

export default Home;
