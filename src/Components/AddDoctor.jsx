import { useState } from "react";
import { useNavigate } from "react-router";
import { addNewDoctors } from "../Helpers/helper";

function AddDoctor({doctorData,SetDoctorData}){
    const[docName,setDocName]= useState("");
    const[hospitalName,setHospitalName]=useState("");
    const[specialization,setSpecialization]= useState("");
    const navigate = useNavigate()

    const addnewDoctorDetails= () =>{
        const newDoctorDetails = {
            doc_name: docName,
            hospital_name: hospitalName,
            specialization,
            status : "Available",
        };
        addNewDoctors(newDoctorDetails).then((data)=>{
            if(data){
                SetDoctorData([...doctorData, newDoctorDetails]);
                navigate("/");
            }else{
                console.log("Sorry cannot add new Doctor")
            }
        })
       

    }
    return(
        
         <div className="grid grid-rows-4 justify-center gap-3">
            <input type="text" placeholder="Enter Doctor Name" className="input input-bordered w-80" value={docName} onChange={(e)=>setDocName(e.target.value)} />
            <input type="text" placeholder="Enter Hospital Name" className="input input-bordered w-80" value={hospitalName} onChange={(e)=>setHospitalName(e.target.value)} />
            <input type="text" placeholder="Enter Specialist" className="input input-bordered w-80" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} />
            <button className="btn btn-accent w-24 justify-self-center" onClick={addnewDoctorDetails}>Add</button>
        </div>
        
       
    )
}

export default AddDoctor;