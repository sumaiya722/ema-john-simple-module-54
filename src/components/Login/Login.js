import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log('came from', location.state?.from);
    return (
        <div className="login-form">
            <div>
                <h2>Log In</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john?<Link to="/register">Create Account</Link></p>
                <div>-------------OR---------------</div>
                <button
                    onClick={signInUsingGoogle}
                    className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;