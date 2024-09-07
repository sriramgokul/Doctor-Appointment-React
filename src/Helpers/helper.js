import { API } from "./API.JS";

export async function getAllDoctor(){
            const res = await fetch(API,{
                method: "GET",
            });
            const data = await res.json();
            return data; 

}

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
