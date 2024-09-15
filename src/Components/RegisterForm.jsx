import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Reducers/loginReducer";

function RegisterForm(){
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = ()=>{
    const userData = {
        username,
        email,
        password,
    };
    console.log(userData);
    dispatch(loginUser(userData));

}

    return (
        <div className="grid grid-rows-3 justify-center mt-24 gap-3 h-52">
            <input type="text" placeholder="Enter UserName" className="input input-bordered w-80" value={username} onChange={(e)=>setUserName(e.target.value)} />
            <input type="email" placeholder="Enter Email" className="input input-bordered w-80" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" className="input input-bordered w-80" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className="btn btn-accent" onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default RegisterForm;