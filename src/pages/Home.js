import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        Home
        <div>
            <Link to="/login">Login</Link>
        </div>
        <div>
            <Link to="/sign-up">Sign Up</Link>
        </div>
    </div>
);

export default Home;
