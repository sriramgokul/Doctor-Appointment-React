import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logOutUsers } from "../Reducers/loginReducer";
function SideBar(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {username} = useSelector((sri)=> sri.loginOperation.data)
    console.log(username);

    
    return(
        <div className="side-bar">
            <ul className="actions">
                <li><div className="text-2xl font-bold leading-7 text-base-900">{username}</div></li>
                <li><button className="btn btn-primary w-28" onClick={()=>navigate("/")}>Home</button></li>
                <li><button className="btn btn-primary w-28" onClick={()=>navigate("/usememo")}>Use Memo</button></li>
                <li><button className="btn btn-primary w-28" onClick={()=>navigate("/callback")}>CallBack</button></li>
                <li><button className="btn btn-primary w-28" onClick={()=>navigate("/login")}>Login</button></li>
                <li><button className="btn btn-primary w-28" onClick={()=>dispatch(logOutUsers())}>Logout</button></li>
            </ul>
        </div>
    )
}

export default SideBar;