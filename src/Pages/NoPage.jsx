import { useNavigate } from "react-router";

function NoPage(){
    const navigate = useNavigate();
    return(
        <div className="grid justify-center">
            <div className="text-lg">404 No Content</div>
            <button className="btn btn-accent" onClick={()=>navigate("/")}>Home</button>
        </div>
    )
}

export default NoPage;