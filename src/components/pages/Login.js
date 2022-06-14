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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API } from "../../api";
import { MyContext } from "../../context";

export default function SignInSide() {
  const navigate = useNavigate();
  const { setUser, admin, setAdmin } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [checkAdmin, setCheckAdmin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      return alert("Please fill out the fields");
    } else {
      fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, adminKey }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.message) {
            setUser(data);
            if (data.adminKey) {
              setAdmin(true);
            }

            navigate("/movies");
          } else alert(data.message);
        })
        .catch((err) => console.log(err));
    }
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
            Login
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
              error={error}
              helperText={error ? "Invalid Credentials" : ""}
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
              error={error}
              helperText={error ? "Invalid Credentials" : ""}
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
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" style={{ color: "blue" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
