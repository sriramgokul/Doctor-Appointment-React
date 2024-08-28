import AddDoctor from "../Components/AddDoctor";
import WorkSpace from "../Components/WorkSpace";

function DocAdd({doctorData,SetDoctorData}){
    return(
        <div>
            <WorkSpace>
                <AddDoctor  doctorData={doctorData} SetDoctorData={SetDoctorData}/>
            </WorkSpace>
        </div>
    )
}

export default DocAdd;