import { toast} from "react-toastify";
export function sendOtp(){
    const user = JSON.parse(localStorage.getItem("user"))
    localStorage.removeItem("otp")
    if(!user.isVerify){
        let otp = ""
        for(let i =0; i <4; i++){
         otp += Math.floor(Math.random()*9)
        }
    localStorage.setItem("otp", JSON.stringify({expiry : (Date.now() + 60*1000),otp }))    
    toast.success(otp)
    }else{
        toast.error("User already verified")
    }

    
}