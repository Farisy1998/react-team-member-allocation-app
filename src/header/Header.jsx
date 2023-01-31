const Header = ({ selectedTeam, teamCount }) => {
  return (
    <div className="header">
      <h1>Team Member Allocation</h1>
      <h4>
        {selectedTeam} has {teamCount > 0 ? teamCount : "No"}{" "}
        {teamCount === 1 ? "Member" : "Members"}
      </h4>
    </div>
  );
};

export default Header;
