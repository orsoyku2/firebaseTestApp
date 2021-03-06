import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./styles.css";

const ContactForm = ({ addContact, currentId, contactData }) => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  useEffect(() => {
    if (currentId === '') {
            setFormData({...formData})
         
    } else {
      setFormData({...contactData[currentId]})
    }
    
  
    }, [currentId,contactData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <form onSubmit={handleSubmit} noValidate style={{ marginTop: "25px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={handleChange}
                name="email"
                value={formData.email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                id="phoneNumber"
              />
            </Grid>
          </Grid>
          <Button
            className="btn-save"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default ContactForm;
