import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import backgroundImage from './loginbg.avif'; // Import your background image

function Admin() {
  const [deldata, setdelData] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cost: '',
    imgurl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8082/deleteTheme/${deldata}`);
    alert("Delete successful");
    navigate("/dis");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/postTheme', formData);
    alert("Added successfully");
    navigate("/display");
  };

  const handleChangeDelete = (e) => {
    setdelData(e.target.value);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>Add New Employee</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    type="number"
                    label="salary"
                    name="cost"
                    value={formData.cost}
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom>Delete Employee</Typography>
            <form onSubmit={handleDelete}>
              <TextField
                fullWidth
                label="Name"
                name="deldata"
                value={deldata}
                onChange={handleChangeDelete}
              />
<Button type="submit" variant="contained" color="secondary">Submit</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Admin;
