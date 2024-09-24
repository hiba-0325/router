import React from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
  };
  return (
    <div>
      <h2>Register </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" required />
        </div>

        <div>
          <label>Password: </label>

          <input type="password" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
