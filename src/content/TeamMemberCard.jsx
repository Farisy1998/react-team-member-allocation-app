import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

const TeamMemberCard = ({
  employee,
  selectedTeam,
  handleEmployeeCardClick,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      <img
        id={employee.id}
        src={employee.gender === "male" ? maleProfile : femaleProfile}
      />
      <div id={employee.id} className="card-body">
        <div id={employee.id} className="card-title">
          <h5 id={employee.id}>Full Name: {employee.fullName}</h5>
          <p id={employee.id} className="card-text">
            <p style={{ fontSize: "16px" }} id={employee.id}>
              Designation: {employee.designation}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
