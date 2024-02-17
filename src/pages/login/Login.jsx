import { Link } from 'react-router-dom';
import './Login.scss';

import React from 'react'

const Login = () => {
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus velit placeat voluptates quibusdam perspiciatis id </p>
                    <span>Don't you have an account</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
