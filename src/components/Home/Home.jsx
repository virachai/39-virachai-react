// "use client";
import Navbar from "../Navbar";
import InputData from "../InputData";
import { useState, useEffect } from "react";
import { Button } from "react-daisyui";
import axios from "axios";

const mockEmployees = [
  {
    name: "Virachai",
    lastname: "Wongsena",
    position: "Senior Developer",
  },
  {
    name: "Tanawin",
    lastname: "Khanomchai",
    position: "Project Manager",
  },
  {
    name: "Suphacha",
    lastname: "Kraisorn",
    position: "Junior Developer",
  },
];

const Home = () => {
  const [sectorUser, setSectorUser] = useState(0);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch initial data from the API when the component mounts
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );

      console.log("response.data:", response.data);
      let data = [...response.data].filter((x) =>
        x.position.endsWith(" (JSD#8)")
      );
      if (data.length === 0) {
        // Add mock employees if the data is empty
        for (const employee of mockEmployees) {
          await createData(employee.name, employee.lastname, employee.position);
        }
        // Re-fetch the employees after adding mock employees
        const updatedResponse = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        data = [...updatedResponse.data].filter((x) =>
          x.position.endsWith(" (JSD#8)")
        );
        setEmployees([...data]);
      } else {
        setEmployees([...data]);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position + " (JSD#8)",
    };

    try {
      const response = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        requestData
      );
      if (response.status === 201 || response.status === 200) {
        await fetchEmployees(); // Fetch updated employees list
        console.log("created successfully!", requestData);
      } else {
        console.error("Error creating employee:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  const deleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const response = await axios.delete(
          `https://jsd5-mock-backend.onrender.com/member/${id}`,
          {
            headers: {
              accept: "application/json",
            },
          }
        );
        console.log("response.status", response.status);
        if (response.status === 200) {
          await fetchEmployees(); // Fetch updated employees list
          console.log("deleted successfully!", id);
        } else {
          console.error("Error deleting employee:", response.statusText);
        }
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  if (!mockEmployees) return <div></div>;
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-svh flex flex-col p-8 justify-start items-center max-w-[1024px] min-w-[1024px] mx-auto">
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
          {sectorUser == 0 && <p>{""}</p>}
          {sectorUser > 0 && (
            <div>
              {sectorUser > 1 && <InputData createData={createData} />}
              <div className="flex justify-center">
                <table className="text-center text-[1.5rem] text-white  bg-gray-500 mt-[2rem]">
                  <thead>
                    <tr>
                      <th className="border-2 border-black w-[15rem]">Name</th>
                      <th className="border-2 border-black w-[15rem]">
                        Last Name
                      </th>
                      <th className="border-2 border-black w-[30rem]">
                        Position
                      </th>
                      {sectorUser > 1 && (
                        <th className="border-2 border-black w-[10rem]">
                          Action
                        </th>
                      )}
                    </tr>
                  </thead>
                  {employees.map((employee) => (
                    <tbody key={employee.id}>
                      <tr>
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
                            <Button
                              className="bg-orange-600"
                              onClick={() => deleteEmployee(employee.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        )}
                      </tr>
                    </tbody>
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

export default Home;
