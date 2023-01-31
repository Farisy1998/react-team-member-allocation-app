const Teams = ({selectedTeam, handleTeamSelect}) => {
    return (
      <select
        className="form-select form-select-lg"
        value={selectedTeam}
        onChange={handleTeamSelect}
      >
        <option>TeamA</option>
        <option>TeamB</option>
        <option>TeamC</option>
        <option>TeamD</option>
      </select>
    );
}

export default Teams;