import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
function Home() {
  return (
    <div className="h-full flex justify-center lg:justify-around items-center mb-5">
      <div id="home" className=" w-11/12 sm:w-[500px]">
        <h1 className=" text-3xl sm:text-4xl text-slate-600 font-bold tracking-wider mb-4">
          Organize all of your important{" "}
          <span className=" text-violet-600">Notes</span> at{" "}
          <span className=" text-blue-600">One Place.</span>
        </h1>
        <p className=" text-base text-slate-500 tracking-wider font-medium mb-8">
          A place to manage all of your notes, thoughts and ideas. Access
          remotely anywhere from the space.
        </p>
        <div className="w-full flex justify-start space-x-6 text-center">
          <Link
            to="/register"
            className="inline-block w-2/5 text-xl text-slate-800 border-2 border-slate-400 rounded-sm font-medium py-3 px-4 hover:font-semibold hover:border-purple-500 hover:-translate-y-1 transition-all"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="inline-block w-2/5 text-xl text-slate-800 border-2 border-slate-400 rounded-sm font-medium py-3 px-4 hover:font-semibold hover:border-purple-500 hover:-translate-y-1 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
      <img
        className="hidden lg:inline-block"
        src={hero}
        alt="iNotes"
        width="500px"
      />
    </div>
  );
}

export default Home;
