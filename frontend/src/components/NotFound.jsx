import { Link } from "react-router-dom";

function NotFound() {
  const auth = localStorage.getItem("user");
  return (
    <div className=" w-11/12 max-w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className=" text-3xl sm:text-4xl font-semibold text-red-500 tracking-wider mb-7">
        Oops!! Page Not Found
      </h1>
      <p className=" text-base text-slate-500 font-semibold tracking-wider mb-5 ">
        The page you are looking for either it is not available or it's
        permanently moves to another url
      </p>
      <Link
        to={auth ? "/notes" : "/"}
        className=" inline-block uppercase text-base py-2 px-3 rounded-sm text-slate-600 border-[1px] border-slate-600 hover:font-semibold hover:-translate-y-1 hover:text-slate-700  hover:border-violet-500 transition-all "
      >
        &lt;- Go back to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
