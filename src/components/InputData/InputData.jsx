import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const InputData = ({ createData }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  useEffect(() => {
    console.log("Component mounted or updated");
  }, [name, lastname, position]); // This runs the effect whenever name, lastname, or position changes

  const submitHandle = (event) => {
    event.preventDefault();

    // Reset errors
    setErrors({ name: "", lastname: "", position: "" });

    // Check for validation
    let isValid = true;
    if (name.trim() === "") {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
      isValid = false;
    }
    if (lastname.trim() === "") {
      setErrors((prev) => ({ ...prev, lastname: "Last name is required." }));
      isValid = false;
    }
    if (position.trim() === "") {
      setErrors((prev) => ({ ...prev, position: "Position is required." }));
      isValid = false;
    }
    if (!isValid) return;

    createData(name, lastname, position);
    setName("");
    setLastname("");
    setPosition("");
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold">Create User Here</h1>
      <form
        className="text-center flex justify-center items-top gap-6 mt-5"
        onSubmit={submitHandle}
      >
        <div className="border">
          <input
            required
            pattern="[a-zA-Z0-9]+"
            minLength={3}
            maxLength={100}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className="input w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="border">
          <input
            required
            pattern="[a-zA-Z0-9]+"
            minLength={3}
            maxLength={100}
            type="text"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            placeholder="Last Name"
            className="input w-full max-w-xs"
          />
          {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
        </div>
        <div className="border">
          <input
            required
            pattern="[a-zA-Z0-9]+"
            minLength={3}
            maxLength={100}
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            placeholder="Position"
            className="input w-full max-w-xs"
          />
          {errors.position && <p className="text-red-500">{errors.position}</p>}
        </div>
        <div>
          <button className="btn btn-primary w-32 rounded-none" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

InputData.propTypes = { createData: PropTypes.func.isRequired };

export default InputData;
