import { useState, useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Employees from "./content/Employees";
import getEmployees from "./utils/getEmployees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupTeamMembers from './content/GroupTeamMembers';
import Navbar from "./content/Navbar";
import NotFound from "./content/NotFound";

function App() {
  const employeesList = getEmployees();

  // useState hook is used to track the sates and it's changes
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employees')) || employeesList
  );

  // useEffect hook is used to perfome an action after a state
  // change has been occured. Which is also called an after effect function
  // or a side effect function.
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam]);

  function handleTeamSelect(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.target.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  }

  return (
    <Router>
      <Navbar />
      <Header
        selectedTeam={selectedTeam}
        teamCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelect={handleTeamSelect}
            />
          }
        />

        <Route path="/group-team-members" element={<GroupTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
