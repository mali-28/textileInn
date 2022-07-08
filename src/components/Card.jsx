import React from "react"
import "./styles/index.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import {  useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { toast } from "react-toastify";
const Note = (props) =>{
    const navigate =useNavigate()
    return <>
    <input id="slider" className="customSlider" type="checkbox"/>
    <label htmlFor="slider"></label>
    

<div className="wrapper">
    <Box 
    sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}}>

	<div className="top-icons">
    <KeyboardDoubleArrowLeftIcon/>
    <FavoriteIcon color="error"/>
	</div>
    <Button onClick={()=>{
        let user =  JSON.parse(localStorage.getItem("user")) || {}
        const users =  JSON.parse(localStorage.getItem("users")) || []
        console.log(users)
        const index = users.findIndex((elem)=> elem.email === user.email)
        console.log(index)
        user = {...user,isLogin: false}
        users[index] = user
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("users", JSON.stringify(users))
        navigate("/login")
        toast.success("Logout successfully")
    }
        
    } >Logout</Button>
    </Box>
    

	
	<div className="profile">
		<img src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" className="thumbnail"/>
		<div className="check"><LibraryAddCheckIcon/></div>
		<h3 className="name">{props.firstName} {props.lastName}</h3>
		<p className="title">{props.email}</p>
		<p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
		
	</div>
	
	<div className="social-icons" >
		<div className="icon">
			<a href="/"><FacebookIcon/></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
		
		<div className="icon">
			<a href="#"><LinkedInIcon/></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
		
		<div className="icon">
			<a href="#"><TwitterIcon/></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
	</div>
</div>

    </>
}

export default Note;