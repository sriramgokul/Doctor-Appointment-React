import { API } from "./API.JS";

// To get Data from API
export async function getAllDoctor(){
            const res = await fetch(API,{
                method: "GET",
            });
            const data = await res.json();
            return data; 

}

// To delete data from API
export async function deleteDoctor(id){
    const res = await fetch(`${API}/${id}`,{
        method: "DELETE",
        headers : {
            "Content-type": "application/json",
        },
    })
    const data = await res.json();
    return data;
}


// To add a new data inside API
export async function addNewDoctors(newObj){
    const res = await fetch(`${API}`,{
        method: "POST",
        body: JSON.stringify(newObj),
        headers: {
            "Content-type": "application/json",
        },
    })
    const data = await res.json();
    return data;
}

//  update a data and then send it to the API 
export async function editNewDoctor(id,editDoc){
    const res = await fetch(`${API}/${id}`,{
        method:"PUT",
        body: JSON.stringify(editDoc),
        headers: {
            "Content-type": "application/json",
        },
    })
    const data = await res.json();
    return data;
}
