import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from './loginbg.avif'; // Import the image file

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    if (!/\s/.test(newUsername) && newUsername.length >= 6 && newUsername.length <= 12) {
      setUsername(newUsername);
      setUsernameError('');
    } else {
      setUsernameError('Username should be between 6 and 12 characters and should not contain spaces.');
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    // Simple email validation (you might want to use a more sophisticated validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(newEmail)) {
      setEmail(newEmail);
      setEmailError('');
    } else {
      setEmailError('Invalid email address.');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;

    // Password conditions
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasDigit = /\d/.test(newPassword);

    if (
      newPassword.length >= 8 &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit
    ) {
      setPassword(newPassword);
      setPasswordError('');
    } else {
      setPasswordError('Password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;

    if (newConfirmPassword === password) {
      setConfirmPassword(newConfirmPassword);
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) {
      setUsernameError('Please enter a username.');
    }
    if (!email) {
      setEmailError('Please enter an email address.');
    }
    if (!password) {
      setPasswordError('Please enter a password.');
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    }

    if (username && email && password && password === confirmPassword) {
      // Add logic for user registration (e.g., send data to a server)
      setUsernameError('');
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');
      console.log('Registration successful:', { username, email, password });
      axios.post("http://127.0.0.1:8081/api/v1/auth/register", {name: username, email:email, password: password,confirmPassword:confirmPassword})
          .then((response) => {
              console.log(response)
          })
          .catch((error) => {
              // Handle error here, for example:
              console.error('Error registering user:', error);
              // You can also update state to display a user-friendly error message
          });
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        {/* Image goes here */}
        <div style={{ height: '100vh', background: `url(${backgroundImage}) center/cover`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" style={{ color: '#fff', textAlign: 'center' }}>Welcome to ZenNest</Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Form goes here */}
        <div style={{ padding: '50px' }}>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              type="text"
              fullWidth
              onChange={handleUsernameChange}
              required
              sx={{ marginBottom: '20px' }}
            />
            {usernameError && <p style={{ color: 'red', marginBottom: '10px' }}>{usernameError}</p>}
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              onChange={handleEmailChange}
              required
              sx={{ marginBottom: '20px' }}
            />
            {emailError && <p style={{ color: 'red', marginBottom: '10px' }}>{emailError}</p>}
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              onChange={handlePasswordChange}
              required
              sx={{ marginBottom: '20px' }}
            />
            {passwordError && <p style={{ color: 'red', marginBottom: '10px' }}>{passwordError}</p>}
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
              fullWidth
              onChange={handleConfirmPasswordChange}
              required
              sx={{ marginBottom: '20px' }}
            />
            {confirmPasswordError && <p style={{ color: 'red', marginBottom: '10px' }}>{confirmPasswordError}</p>}
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#4caf50', color: 'white', '&:hover': { backgroundColor: '#45a049' } }}>
              Register
            </Button>
          </form>
          <p style={{ marginTop: '20px' }}>
            Already have an account? <Link to="/Login" style={{ color: 'blue' }}>Log In</Link>
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUp;
