import * as React from 'react';
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

const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate()
    const [user, setUser] = React.useState({
        email: null,
        password: null,
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
    const isUser = users?.find((elem, id)=> elem.email === user?.email && elem.password === md5(user?.password) )
    if(!isUser.length){
        toast.error("Invalid Username or password");
    }else{
        if(!isUser.isVerify){
            toast.error("Your account is not verified");
        }else{
        localStorage.setItem("user", JSON.stringify({...user, isLogin: true}))
        navigate("/home")
        toast.success("SuccessFully login");
    }


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
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  If you are not registered Please Sign up now!
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