const Languages = ({ isEditing, data, handleChange }) => {
  return (
    <div className="section">
      <h2>Languages</h2>
      {isEditing ? (
        <textarea
          value={data}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Languages"
        />
      ) : (
        <div>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default Languages;
