import { toast} from "react-toastify";
export function verifyOtp(OTP){
    const otp =  JSON.parse(localStorage.getItem("otp"))
    if(otp){
        if(Date.now() <= otp.expiry){
            if(otp.otp === OTP){
                let user =  JSON.parse(localStorage.getItem("user")) || {}
                user = {...user, isVerify: true, isLogin: true}
                localStorage.setItem("user", JSON.stringify(user))
                let users =  JSON.parse(localStorage.getItem("users")) || []
                localStorage.setItem("users", JSON.stringify([...users, user]))
                localStorage.removeItem("otp")
                toast.success("Registered Successfully")
                return true
            }else{
                toast.error("Invalid OTP")
                
            }

        }else{
            toast.error("OTP is expired")
        }
    }
    return false
}