import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const getNoteDetail = async () => {
    const userID = JSON.parse(localStorage.getItem("user"))._id;
    let response = await fetch(
      `${import.meta.env.VITE_SERVER_API_URI}api/n2/notes/?noteID=${params.id}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
          userID: userID,
        },
      }
    );
    response = await response.json();
    if (response.success === true) {
      setTitle(response.note.title);
      setDescription(response.note.description);
    }
  };
  useEffect(() => {
    getNoteDetail();
  }, []);
  return (
    <div className=" w-11/12 max-w-3xl mx-auto mt-16 mb-5">
      <h1
        className=" text-3xl sm:text-4xl text-blue-500 font-bold tracking-wider mb-5
      "
      >
        {title}
      </h1>
      <p className=" text-base text-slate-700 font-normal tracking-wide mb-5  text-justify">
        {description}
      </p>
      <Link
        to="/notes"
        className="inline-block text-base text-slate-600 py-2 px-3 rounded-md border-2 border-slate-500 hover:text-blue-600 hover:border-blue-500 hover:scale-105"
      >
        &lt;- Go back
      </Link>
    </div>
  );
}

export default SingleNote;
