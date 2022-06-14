import React, { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { API } from "../../api";
import { MyContext } from "../../context";

const SignInSide = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [admin, setAdmin] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      return alert("Please fill out the fields");
    }

    console.log(email, password, adminKey);
    fetch(`${API}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        adminKey !== ""
          ? JSON.stringify({ email, password, adminKey })
          : JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        navigate("/movies");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://inc42.com/wp-content/uploads/2021/06/F4-Feature-1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightGrey",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register With Us
          </Typography>
          {/* <GoogleButton
            className="GoogleButton"
            onClick={() => {
              console.log("Google button clicked");
            }}
          /> */}

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {checkAdmin && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="adminKey"
                label="adminKey"
                type="text"
                id="adminKey"
                onChange={(e) => setAdminKey(e.target.value)}
                value={adminKey}
              />
            )}

            <span>
              <Checkbox onClick={() => setCheckAdmin(!checkAdmin)} /> Click if
              Admin
            </span>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
