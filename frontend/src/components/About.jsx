import React from "react";

function About() {
  return (
    <div className=" w-11/12 max-w-3xl mx-auto mt-16 mb-16 text-justify">
      <h1
        className=" text-4xl text-blue-500 font-bold tracking-wider mb-10 uppercase
      "
      >
        About
      </h1>
      <p className=" text-base text-slate-700 font-normal tracking-wide mb-3">
        <span className=" font-bold text-2xl">-</span> Welcome to our
        revolutionary notes making web application! Designed with simplicity and
        convenience in mind, our platform allows you to effortlessly create,
        update, and delete notes from anywhere, ensuring your ideas are always
        at your fingertips.
      </p>
      <p className=" text-base text-slate-700 font-normal tracking-wide mb-3">
        <span className=" font-bold text-2xl">-</span> Our user-friendly
        interface streamlines the note-taking process, enabling you to note down
        your thoughts, organize tasks, and store important information
        seamlessly. With our robust database system, your notes are securely
        stored and easily retrievable whenever you need them.
      </p>
      <p className=" text-base text-slate-700 font-normal tracking-wide mb-3">
        <span className=" font-bold text-2xl">-</span> We prioritize your
        privacy and security. Our user authentication feature ensures that only
        authorized individuals have access to their personal notes. By creating
        an account, you can confidently sync your notes across devices and enjoy
        uninterrupted productivity.
      </p>
      <p className=" text-base text-slate-700 font-normal tracking-wide mb-3">
        <span className=" font-bold text-2xl">-</span> Our about page wouldn't
        be complete without mentioning our commitment to continuous improvement.
        We value your feedback and actively strive to enhance your experience.
        As we evolve, we aim to introduce new features and functionalities,
        making note-taking even more efficient and enjoyable.
      </p>
      <p className=" text-base text-slate-700 font-normal tracking-wide mb-3">
        <span className=" font-bold text-2xl">-</span> Thank you for choosing
        our notes making web application. We're excited to be a part of your
        journey towards enhanced productivity and organization. Start exploring
        our platform today and unlock your true potential!
      </p>
      <p className="text-sm text-slate-800">
        credit -{" "}
        <a
          href="https://unsplash.com/photos/zoCDWPuiRuA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          target="_blank"
          className=" text-blue-600 font-semibold"
        >
          Photos by Unsplash
        </a>
      </p>
    </div>
  );
}

export default About;
