import Navbar from "../Navbar";

const Owner = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-svh flex flex-col p-8 justify-start items-center max-w-[1024px] mx-auto">
        <h1 className="font-bold text-[44px] m-20">
          Viracha Wongsena - Web Developer
        </h1>
        <img
          src="https://virachai.github.io/profile-virachai.jpg"
          alt="Viracha Wongsena"
          className="rounded-full w-48 h-48 object-cover"
        />
        <h3 className="font-bold text-[14px] m-5">Short Biography:</h3>
        <p className="text-[14px] text-center max-w-lg">
          Hello! I&apos;m Viracha Wongsena, a passionate web developer
          specializing in creating stunning and efficient web applications. With
          a strong background in front-end and back-end technologies, I strive
          to deliver seamless user experiences and innovative solutions.
          Let&apos;s build something amazing together!
        </p>
      </main>
    </>
  );
};

export default Owner;
