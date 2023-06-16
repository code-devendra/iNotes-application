import { Link, Navigate } from "react-router-dom";
import AddNote from "./AddNote";
import { useEffect, useState } from "react";

function Notes() {
  const [renderAgain, setRenderAgain] = useState(true);
  const [allNotes, setAllNotes] = useState([]);
  const getAllNotes = async () => {
    const userID = JSON.parse(localStorage.getItem("user"))._id;
    let response = await fetch(
      `${import.meta.env.VITE_SERVER_API_URI}/api/n2/notes/`,
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
    setAllNotes(response.notes);
  };
  useEffect(() => {
    getAllNotes();
  }, [renderAgain]);
  const deleteNote = async (id) => {
    const userID = JSON.parse(localStorage.getItem("user"))._id;
    let response = await fetch(
      `${import.meta.env.VITE_SERVER_API_URI}/api/n2/notes/?noteID=${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
          userID: userID,
        },
      }
    );
    response = await response.json();
    if (response.success === true) setRenderAgain(!renderAgain);
  };
  return (
    <>
      <AddNote
        reRender={() => {
          setRenderAgain(!renderAgain);
        }}
      />
      <h1 className="my-3 text-center text-3xl text-violet-600 font-bold">
        All Notes
      </h1>
      {allNotes.length > 0 ? (
        <div className="w-11/12 mx-auto my-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allNotes.map((note, index) => (
            <div
              key={index}
              className="border-2 border-slate-500 p-3 pb-1 rounded shadow-md hover:border-blue-500"
            >
              <Link
                to={`view/${note._id}`}
                className=" text-2xl text-slate-800 font-semibold cursor-pointer hover:text-violet-600 tracking-wide mb-2"
              >
                {note.title}
              </Link>
              <p className="text-sm sm:text-base text-slate-600 tracking-wide h-12 overflow-y-hidden mb-2">
                {note.description.length > 70
                  ? `${note.description.slice(0, 69)}...`
                  : `${note.description}...`}
              </p>
              <div className="flex items-center justify-around">
                <Link
                  to={`update/${note._id}`}
                  className="inline-block w-1/3 text-center p-2 font-semibold text-slate-500 hover:text-green-600 hover:scale-105"
                >
                  <i className="bi bi-pencil-square"></i> Update
                </Link>
                <button
                  onClick={() => deleteNote(note._id)}
                  className="inline-block w-1/3 text-center p-2 font-semibold text-slate-500 hover:text-red-600 hover:scale-105"
                >
                  <i className="bi bi-trash3"></i> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl text-slate-700 font-semibold my-5 tracking-wider">
          You don't have any note yet.
        </h2>
      )}
    </>
  );
}

export default Notes;
