import TeamMembers from "./TeamMembers";
import Teams from "./Teams";

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelect,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6 m-2">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelect={handleTeamSelect}
          />
        </div>
        <div className="col-7">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
