import Navbar from "../Navbar";

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
  if (!mockEmployees) return <div></div>;
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h1>Generation Thailand React - Assessment</h1>
      </main>
    </>
  );
};

export default Home;
