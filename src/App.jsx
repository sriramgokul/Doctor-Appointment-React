import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DocDash from './Pages/DocDash';
import DocAdd from './Pages/DocAdd';
import DocEdit from './Pages/DocEdit';
import { useState } from 'react';
import NoPage from './Pages/NoPage';

function App() {
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


  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DocDash doctorData={doctorData} SetDoctorData={SetDoctorData}/>}/>
        <Route path='/add/doc' element={<DocAdd doctorData={doctorData} SetDoctorData={SetDoctorData}/>}/>
        <Route path='/edit/doc/:id' element={<DocEdit doctorData={doctorData} SetDoctorData={SetDoctorData}/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
