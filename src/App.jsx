import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DocDash from './Pages/DocDash';
import DocAdd from './Pages/DocAdd';
import DocEdit from './Pages/DocEdit';
import { useEffect, useState } from 'react';
import NoPage from './Pages/NoPage';
import { AppState } from './Context/AppContext';
import { getAllDoctor } from './Helpers/helper';

function App() {
  
  const [doctorData, SetDoctorData]= useState();
 useEffect(()=>{
    getAllDoctor().then((data)=>{
      SetDoctorData(data);
    })
 },[])
  const {theme} = AppState();
 

  return (
    <div className='app' data-theme={theme}>
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
