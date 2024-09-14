import React from "react";
import { useCallback, useState } from "react";

function Callback(){
    const [state,setState] = useState(0);
    const [show,setShow] = useState(true);

    const handleDisplay = useCallback(() =>{
        setShow(!show)
    },[show]);
    const handleChange = () =>{
        setState((prev)=> prev + 1)
    }
    const handleChangeDec = () =>{
        setState((prev)=> prev - 1)
    }
    return (
        <div className="grid grid-cols-3">
        <button className="btn btn-warning" onClick={handleChange}>Inc</button>
        <p>{show && state}</p>
        <button className="btn btn-warning" onClick={handleChangeDec}>Dec</button>

        <div>
        <Display handleDisplay={handleDisplay}/>
        </div>
    </div>
    )
}

export default Callback;

const  Display = React.memo(({handleDisplay})=>{
    console.log("display Components Renders")
    return (
        <div>
            <button className="btn btn-secondary" onClick={handleDisplay}>Show/Hide</button>
        </div>
    )
})