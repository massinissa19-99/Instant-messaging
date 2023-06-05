import React from "react";
import { Route, Routes } from "react-router-dom";
// import Profile from "../Profile/Profile";
import AddEmployee from "../AddEmployee/AddEmployee";
import EmployeeList from "../EmployeeList/EmployeeList";
import VisiteurListe from "../VisiteurListe/VisiteurListe";
import AddVisiteur from "../AddVisiteur/AddVisiteur";

const ServiceDayoboard = () => {
  return (
    <Routes>
      {/* <Route path="profile" element={<Profile />} /> */}
      {/* <Route path="employeeList" element={<EmployeeList />} /> */}
      <Route path="visiteurListe" element={<VisiteurListe />} />
      <Route path="addVisiteur" element={<AddVisiteur />} />

    </Routes>
  );
};

export default ServiceDayoboard;
