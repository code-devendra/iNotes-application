import React, { useState } from "react";

function AddNote({ reRender }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addNote = async () => {
    const userID = JSON.parse(localStorage.getItem("user"))._id;
    let response = await fetch("http://localhost:4488/api/n2/notes/", {
      method: "post",
      body: JSON.stringify({ title, description, userID }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        userID: userID,
      },
    });
    response = await response.json();
    if (response.success === true) {
      setDescription("");
      setTitle("");
      reRender();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote();
  };
  return (
    <div className="w-11/12 max-w-xl mx-auto mt-10 mb-5">
      <form
        onSubmit={handleSubmit}
        className="w-full border border-slate-500 rounded py-3 px-4"
      >
        <input
          className="w-full text-lg text-slate-800 font-semibold mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block rounded-sm sm:text-base focus:ring-1"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          className="w-full text-base text-slate-700 font-semibold mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block rounded-sm sm:text-sm focus:ring-1"
          name="description"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (Optional)"
        ></textarea>
        <button
          type="submit"
          className=" w-32 text-lg font-semibold text-slate-500 mt-4 mb-1 py-3 px-4 border-2 border-slate-500 rounded-sm hover:border-blue-500 hover:text-slate-600 hover:-translate-y-1 transition-all"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
