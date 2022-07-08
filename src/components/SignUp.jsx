import  * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast} from "react-toastify";
import md5 from 'md5';
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom"
import CopyRight from "./CopyRight"
import { useNavigate } from "react-router-dom";
import {sendOtp} from "../features/sendOtp"
const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate()
    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        id: Date.now(),
        isLogin : false,
        isVerify: false
    })
    React.useEffect(()=>{
      const currUser = JSON.parse(localStorage.getItem("user")) || {}
      if(currUser?.isLogin){
        navigate("/home")
      }
    },[])

  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target
    setUser((pre)=> {
        return {...pre, [name]: value}
    })
    
  };
  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const isUser = users?.some((elem, id)=> elem?.email === user?.email)
    if(!isUser){
        localStorage.setItem("user", JSON.stringify({...user, password : md5(user.password)}))
        sendOtp()
        navigate("/verification")

    }else{
      toast.error("User already exists");
    }
  }

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=> {handleChange(e)}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=> {handleChange(e)}}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=> {handleChange(e)}}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=> {handleChange(e)}}

                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link  to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyRight sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    
  );
}