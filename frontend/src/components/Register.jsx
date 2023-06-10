import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Email already exist!!");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) navigate("/notes");
  }, []);

  const validateSubmit = async () => {
    let response = await fetch(
      "https://inotes-web-server.onrender.com/api/n1/user/new",
      {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    if (response.success === false) {
      setError(true);
      setErrorMsg(response.message);
    } else {
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", JSON.stringify(response.token));
      navigate("/notes");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateSubmit();
  };
  return (
    <div className="h-full flex justify-center lg:justify-around items-center mb-5">
      <div className=" w-11/12 max-w-[400px] h-auto mx-auto mb-5 py-5 px-4 border-2 border-slate-100 rounded shadow-md">
        <h1 className=" text-center text-3xl text-purple-500 font-semibold">
          Register
        </h1>
        <span className="w-full inline-block text-slate-500 mb-5 italic text-center">
          or Go back to{" "}
          <Link
            to="/"
            className=" text-purple-600 font-bold tracking-wider cursor-pointer"
          >
            i<span className=" text-blue-600">Notes</span>
          </Link>
        </span>
        <form onSubmit={handleSubmit}>
          <label className=" block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-sm sm:text-sm focus:ring-1"
              placeholder="ex. John"
            />
          </label>
          <label className=" block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9]+[a-z0-9.]+[a-z0-9]+@[a-z0-9]+[a-z0-9.]+.[a-z]{2,3}"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-sm sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
          <label className=" block mb-7">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="^[a-zA-Z0-9!@#$%^&*]{6,16}$"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-sm sm:text-sm focus:ring-1"
              placeholder="ex. Abc@123"
            />
          </label>
          {error && (
            <p className=" text-sm text-red-600 font-semibold italic mb-5">
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            className="block w-full text-center mx-auto px-4 py-2 text-base text-purple-600 font-semibold rounded-sm border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Register
          </button>
          <span className="w-full inline-block text-center mt-2 text-slate-600 text-sm tracking-wider">
            Already Registered?{" "}
            <Link
              to="/login"
              className=" text-blue-600 font-semibold cursor-pointer"
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
