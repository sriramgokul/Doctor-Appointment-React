import * as yup from "yup";

export const docSchema = yup.object({
    doc_name : yup
    .string()
    .required("Please fill in the doctor Name")
    .min(3,"Minimum three words required")
    .max(10,"First or Last name is enough"),
    hospital_name: yup.string().required("Enter the Hospital Name"),
    specialization : yup.string().required("Please Enter the medical department")
})