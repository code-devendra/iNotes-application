import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full text-center py-3 bg-indigo-100">
      <p className="text-base text-slate-800 tracking-wider font-semibold">
        &copy; 2023 CopyRight by{" "}
        <Link to="" className="text-blue-600 font-bold">
          <span className=" text-purple-600">i</span>Notes
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
