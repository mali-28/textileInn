import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import Card from "./Card";
export default  function Dashboard() {
    const navigate = useNavigate;
    const [user, setUser] = useState({})
    React.useEffect(()=>{
        const currUser = JSON.parse(localStorage.getItem("user")) || {}
        setUser(currUser)
        if(!currUser?.isLogin){
          navigate("/login")
          toast.error("Unauthorized User")
        }
      },[])

    return (
        <Card
        id= {user.id}
        email={user.email}
        firstName = {user.firstName}
        lastName =  {user.lastName}
        picture = "https://images.app.goo.gl/SK5dr5MNJbXXe1Nb9"
        />)

}