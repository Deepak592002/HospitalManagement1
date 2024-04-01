// MainContent.js
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import PatientTable from './PatientTable';
import LeftSidebar from './LeftSidebar';
import PatientForm from './PatientForm';

const MainContent = () => {
    return (
        
    <BrowserRouter>
        <LeftSidebar/>
        <div className="flex-1 ">
            <Routes>
                <Route exact path='/PatientTable' element={<PatientTable />} />
                <Route  path='/PatientForm' element={<PatientForm />} />
            </Routes>
            </div>
    </BrowserRouter>

    );
}

export default MainContent;
