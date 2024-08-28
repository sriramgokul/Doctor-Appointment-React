import Main from "../Components/Main";
import WorkSpace from "../Components/WorkSpace";

function DocDash({doctorData, SetDoctorData}){
    return (
        <div>
            <WorkSpace>
                <Main doctorData={doctorData} SetDoctorData={SetDoctorData}/>
            </WorkSpace>
        </div>
    )
}

export default DocDash;