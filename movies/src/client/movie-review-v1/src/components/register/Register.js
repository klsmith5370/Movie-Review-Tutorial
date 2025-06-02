import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');
  
    const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/users/v1/', formData);
        setMessage('Registered successfully!');
      } catch (error) {
        setMessage('Registration failed. Try again.');
      }
    };

    return (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
}

export default Register;