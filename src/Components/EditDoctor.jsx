import { useEffect, useState } from "react";

function EditDoctor({doctorData,SetDoctorData,showForm,setShowForm,editId}){
    const[docName,setDocName]= useState("");
    const[hospitalName,setHospitalName]=useState("");
    const[specialization,setSpecialization]= useState("");
    const[docstatus,setDocStatus] = useState("");
    
    useEffect(()=>{
        const selectedDoctor = doctorData.filter((doc,idx)=> idx == editId)
        setDocName(selectedDoctor[0].doc_name);
        setHospitalName(selectedDoctor[0].hospital_name)
        setSpecialization(selectedDoctor[0].specialization)
        setDocStatus(selectedDoctor[0].status)
    },[editId])
    
    // Update the Doctor Info
    function UpdateDoctorDetails(){
        const editedDoctor = {
            doc_name : docName,
            hospital_name : hospitalName,
            specialization,
        }
        doctorData[editId] = editedDoctor;
        SetDoctorData([...doctorData])
        setShowForm(!showForm);
        
    }
    return(
        <div className="grid grid-rows-4 justify-center gap-3">
            <input type="text" placeholder="Enter Doctor Name" className="input input-bordered w-80" value={docName} onChange={(e)=>setDocName(e.target.value)} />
            <input type="text" placeholder="Enter Hospital Name" className="input input-bordered w-80" value={hospitalName} onChange={(e)=>setHospitalName(e.target.value)} />
            <input type="text" placeholder="Enter Specialist" className="input input-bordered w-80" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} />
            <button className="btn btn-secondary w-24 justify-self-center" onClick={UpdateDoctorDetails}>Update</button>
        </div>
    )
}

export default EditDoctor;