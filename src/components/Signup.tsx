import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Send a POST request to the backend signup API
            const response = await axios.post('http://localhost:3000/signup', {
                username,
                email,
                password
            });

            // If successful, show a success message
            setSuccess(response.data.message);
        } catch (err: any) {
            // If an error occurs, display an error message
            if (err.response && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('An error occurred during signup.');
            }
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signup</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default Signup;
