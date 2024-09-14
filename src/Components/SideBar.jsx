import { useNavigate } from "react-router";

function SideBar(){
    const navigate = useNavigate();
    return(
        <div className="side-bar">
            <ul className="actions">
                <li><button className="btn btn-primary" onClick={()=>navigate("/usememo")}>Use Memo</button></li>
                <li><button className="btn btn-primary" onClick={()=>navigate("/callback")}>CallBack</button></li>
                <li>Three</li>
                <li>Four</li>
            </ul>
        </div>
    )
}

export default SideBar;