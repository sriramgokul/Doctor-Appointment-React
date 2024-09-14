import { useMemo, useState } from "react";

function State(){
    const [change,setChange] = useState(0);
    const [show,setShow] = useState(true);
    const multipleTwo = useMemo(() =>{
        for (let i =0; i< 10000000; i++){}
        return change * 2;

    },[change]);

    const handleChange = () =>{
        setChange((prev)=> prev + 1)
    }
    const handleChangeDec = () =>{
        setChange((prev)=> prev - 1)
    }
    return(
        <div className="grid grid-cols-3">
            <button className="btn btn-warning" onClick={handleChange}>Inc</button>
            {show ? change : "No value"}
            <button className="btn btn-warning" onClick={handleChangeDec}>Dec</button>
            <p>{multipleTwo}</p>
            <button className="btn btn-warning" onClick={()=> setShow((prev)=> !prev)}>Change</button>

        </div>
    )
}

export default State;