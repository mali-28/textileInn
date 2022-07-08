import React from "react";
import OTPInput from "otp-input-react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {sendOtp} from "../features/sendOtp"
import {verifyOtp} from "../features/verifyOtp"
import { useNavigate } from "react-router-dom";
const theme = createTheme();


export default function OtpInputField() {
    const navigate = useNavigate()
    const [OTP, setOTP] = React.useState()

    React.useEffect(()=>{
        const currUser = JSON.parse(localStorage.getItem("user")) || {}
        if(currUser?.isLogin){
          navigate("/home")
        }
      },[])
    return (     
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: "column"

        }}
      >
      <Box sx={{
        height: "40%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
       
    }}>
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
            Verification Code
        </Typography>
        <Grid
            item
            xs={12}
            sx= {{paddingLeft :2, marginY: 2}}
            container
            justify="center"
            alignItems="center"
            direction="column"

        >
          <OTPInput
                value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="string" disabled={false} 
                 
                />
              </Grid>
            
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={()=> {
                const isLogin = verifyOtp(OTP)
                if(isLogin) navigate("/home")

            }}
            
          >
            Verify
          </Button>
          <Grid container justifyContent="flex-end">
              <Grid item>
                <Link  to="/verification" variant="body2" onClick={()=> {sendOtp()}}>
                  ResendOTP
                </Link>
              </Grid>
              </Grid>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
            </Grid>
          </Grid>
          </Box>
          
        </Box>
    </Container>
  </ThemeProvider>
      
    );
  }