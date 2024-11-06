"use client";
import Navbar from "../Navbar";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-daisyui";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "react-daisyui";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sectorUser, setSectorUser] = useState(0);
  const [employees, setEmployees] = useState(mockEmployees);

  const createData = async (name, lastname, position) => {
    // const requestData = {
    //   name: name,
    //   lastname: lastname,
    //   position: position,
    // };
    // //หลัง link api ต้องมี ,requestData ต่อท้ายเสมอ
    // const response = await axios.post(`${Api}members`, requestData);
    // if (response.status === 200) {
    //   setReload(!reload);
    //   // log นี้เอาไว้เช็คว่าสร้างเสร็จจริงมั้ย ส่วนอันหลัง ให้บอกด้วยว่าสร้างอะไรไป
    //   console.log("created successfully!", response);
    // }
  };

  if (!mockEmployees) return <div></div>;
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-svh flex flex-col p-8 justify-start items-center max-w-[1024px] mx-auto">
        <h1 className="text-3xl">Generation Thailand React - Assessment</h1>
        <div className="w-full flex justify-evenly p-8">
          <div>
            <Button
              className="btn w-64 rounded-full"
              onClick={() => setSectorUser(1)}
            >
              User Home Sector
            </Button>
          </div>
          <div>
            <Button
              className="btn w-64 rounded-full"
              onClick={() => setSectorUser(2)}
            >
              Admin Home Sector
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center p-8">
          {sectorUser == 0 && <p>{"No Sector"}</p>}
          {sectorUser > 0 && (
            <div>
              {sectorUser > 1 && <InputData createData={createData} />}
              <div className="flex justify-center">
                <table className="text-center text-[1.5rem] text-white  bg-gray-500 mt-[2rem]">
                  <tr>
                    <th className="border-2 border-black w-[15rem]">Name</th>
                    <th className="border-2 border-black w-[15rem]">
                      Last Name
                    </th>
                    <th className="border-2 border-black w-[15rem]">
                      Position
                    </th>
                    {sectorUser > 1 && (
                      <th className="border-2 border-black w-[15rem]">
                        Action
                      </th>
                    )}
                  </tr>

                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="border-2 border-black bg-neutral-content text-primary-content">
                        {employee.name}
                      </td>
                      <td className="border-2 border-black bg-neutral-content text-primary-content">
                        {employee.lastname}
                      </td>
                      <td className="border-2 border-black bg-neutral-content text-primary-content">
                        {employee.position}
                      </td>
                      {sectorUser > 1 && (
                        <td className="border-2 border-black bg-neutral-content text-primary-content">
                          <Button className="bg-orange-600">Delete</Button>
                        </td>
                      )}
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

const InputData = ({ createData }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    position: "",
  });

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

export default Home;
