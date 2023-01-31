import { useState } from "react";

const GroupTeamMembers = ({ employees, selectedTeam, setTeam }) => {
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
    
    function groupTeamMembers() {
        const teams = [];

        const teamAMembers = employees.filter(
            employee => employee.teamName === 'TeamA'
        );
        const teamA = {
            teamName: 'TeamA',
            teamMembers: teamAMembers,
            collapsed: selectedTeam === 'TeamA' ? false : true
        };
        teams.push(teamA);

        const teamBMembers = employees.filter(
          (employee) => employee.teamName === "TeamB"
        );
        const teamB = {
          teamName: "TeamB",
          teamMembers: teamBMembers,
          collapsed: selectedTeam === "TeamB" ? false : true,
        };
        teams.push(teamB);

        const teamCMembers = employees.filter(
          (employee) => employee.teamName === "TeamC"
        );
        const teamC = {
          teamName: "TeamC",
          teamMembers: teamCMembers,
          collapsed: selectedTeam === "TeamC" ? false : true,
        };
        teams.push(teamC);

        const teamDMembers = employees.filter(
          (employee) => employee.teamName === "TeamD"
        );
        const teamD = {
          teamName: "TeamD",
          teamMembers: teamDMembers,
          collapsed: selectedTeam === "TeamD" ? false : true,
        };
        teams.push(teamD);

        return teams;
    }

    function handleTeamClick(event) {
        const newGroupedData = groupedEmployees.map(team => team.teamName === event.target.id ? { ...team, collapsed: !team.collapsed } : team);
        setGroupedData(newGroupedData);
        setTeam(event.target.id);
    }

    return (
      <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-6 m-2">
            {groupedEmployees.map((item) => (
              <div key={item.teamName} className="card m-2">
                <h4
                  id={item.teamName}
                  className="card-header text-secondary bg-white"
                  onClick={handleTeamClick}
                  style={{ cursor: "pointer" }}
                >
                  Team: {item.teamName}
                </h4>
                <div
                  id={"collapse_" + item.teamName}
                  className={item.collapsed === true ? "collapse" : ""}
                >
                  <hr />
                  {item.teamMembers.map((member) => (
                    <div key={member.id} className="m-2">
                      <h5 className="card-title m-2">
                        <span className="text-dark">
                          Full Name: {member.fullName}
                        </span>
                        <p>Designation: {member.designation}</p>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default GroupTeamMembers;