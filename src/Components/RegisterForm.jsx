import { useState } from "react";
import { loginUsers } from "../Reducers/loginReducer";
import { useDispatch } from "react-redux";

function RegisterForm(){
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = ()=>{
        const userData = {
            username,
            email,
            password
        }
        
        dispatch(loginUsers(userData));
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="grid grid-rows-4 justify-center mt-24 gap-3 h-52">
            <input type="text" placeholder="Enter UserName" className="input input-bordered w-80" value={username} onChange={(e)=>setUserName(e.target.value)} />
            <input type="email" placeholder="Enter Email" className="input input-bordered w-80" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" className="input input-bordered w-80" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className="btn btn-accent" onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default RegisterForm;