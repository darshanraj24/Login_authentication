import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
    const navigate = useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userName) {
            setError('Please enter username');
            setSuccess('');
            return;
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (response.ok) {
            const users = await response.json();
            const authenticatedUser = users.find(
                (user) => user.email === userName
            );

            if (!authenticatedUser) {
                setError('No user found');
                setSuccess('');

            } else if (authenticatedUser.username !== password) {
                setError('Invalid password');
                setSuccess('');

            } else {
                setError('');
                setSuccess('Login successful');
                handleLogin();
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }
        } else {
            setError('Login failed');
            setSuccess('');
        }
    };


    return (
        <div className='container'>
            <div className="headding">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="createlogin">
                        <div className='inputs'>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter the email"
                                // required
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='inputs'>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter the password"
                                // required
                                value={password}
                                minLength={3}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error ? (
                            <div className="error">{error}</div>
                        ) : success ? (
                            <div className="success">{success}</div>
                        ) : null}

                        <button type="submit">Login</button>
                        <br></br>
                        <Link id="signup">click here to signup</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
