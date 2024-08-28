import { useParams } from "react-router";
import EditDoctor from "../Components/EditDoctor";
import WorkSpace from "../Components/WorkSpace";

function DocEdit({doctorData,SetDoctorData,editId}){
    const {id} = useParams();
    return(
        <div>
            <WorkSpace>
                <EditDoctor doctorData={doctorData} SetDoctorData={SetDoctorData} editId={id}/>
            </WorkSpace>
        </div>
    )
}
export default DocEdit;