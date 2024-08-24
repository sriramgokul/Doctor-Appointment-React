import { useState } from "react";
import AddDoctor from "./AddDoctor";
import EditDoctor from "./EditDoctor";

function Main(){
    const data = [
        {
            doc_name:"DEEPSHANA AMILIA",
            hospital_name:"Apollo",
            specialization : "Heart Surgeon",
            status : "Available",
        },
        {
            doc_name:"RAMYA RAKSHANA",
            hospital_name:"Kaveri",
            specialization : "Eye Surgeon",
            status : "Not Available",
        },

    ];
    const [doctorData, SetDoctorData]= useState(data);
    const [showForm,setShowForm] = useState(true);
    const [editId,setEditId]= useState();
    // Deleting the Card in UI
    function deleteDoctorDetails(idx){
        const remainingDoctors= doctorData.filter((docInfo,id)=>(idx !=id))
        SetDoctorData(remainingDoctors);
        }
        
    // Handling Edit Button
    function handleEdit(id){
        setShowForm(false)
        setEditId(id)
    }  

    return(
        <div className="main">
            {showForm == true ? <AddDoctor doctorData={doctorData} SetDoctorData={SetDoctorData}/>:<EditDoctor doctorData={doctorData} SetDoctorData={SetDoctorData} showForm={showForm} setShowForm={setShowForm} editId={editId}/> }
            
            {
                doctorData && (
                    <>
                    {doctorData?.map((docInfo, idx)=>(
                        <div key={idx} className="card card-compact w-96 bg-base-100 shadow-xl">
  
                        <div className="card-body">
                            <h2 className="card-title">{docInfo.doc_name}</h2>
                            <p>{docInfo.hospital_name}</p>
                            <p>{docInfo.specialization}</p>
                            <select className="select select-bordered select-sm w-36 max-w-xs">
                                {docInfo.status == "Available" ? (
                                    <option>Available</option>
                                    ) : (
                                    <option>Not Available</option>
                                    )}
                                {docInfo.status == "Not Available" ? (
                                    <option>Available</option>
                                    ) : (
                                    <option>Not Available</option>
                                    )}

                            </select>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={()=>handleEdit(idx)}>EDIT</button>
                             {/* While passsing aruguments to a "onclick" event via a function,we must write like this only--()=> */}
                            <button className="btn btn-error" onClick={()=>deleteDoctorDetails(idx)}>DELETE</button>
                
                            </div>
                        </div>
                        </div>

                    ))}
                    </>
                )
            }
        
        </div>
    )
}

export default Main;