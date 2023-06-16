# iNotes - Full Stack Note-Making Application

![iNotes Logo](https://inotes-seven.vercel.app/assets/logo-c585733b.svg)

Welcome to iNotes, a revolutionary note-making web application built with the MERN (MongoDB, Express, React, Node.js) stack. With a seamless integration of technologies like MongoDB, Express, Node.js, React, Tailwind CSS, bcrypt, jwt, and Mongoose, iNotes offers a user-friendly and secure platform for effortless note creation, management, and organization. This README file will provide you with an overview of the application and guide you on how to get started.

## Features

- **User-Friendly Interface**: iNotes's intuitive design simplifies the note-taking process, allowing you to note down your thoughts, organize tasks, and store important information effortlessly.
- **Robust Database System**: All your notes are securely stored and easily retrievable with the help of our powerful MongoDB database.
- **User Authentication**: We prioritize your privacy and security. iNotes ensures that only authorized individuals have access to their personal notes by implementing user authentication with bcrypt and JWT (JSON Web Tokens). Create an account to sync your notes across devices and enjoy a seamless experience.
- **Continuous Improvement**: We value your feedback and are committed to continuously improving iNotes. Our goal is to introduce new features and functionalities, making note-taking even more efficient and enjoyable for our users.

## Getting Started

To use iNotes, simply visit our live site at [https://inotes-seven.vercel.app/](https://inotes-seven.vercel.app/). There's no need to install anything or set up a local development environment. You can start creating and managing your notes right away.

**Or**

To use iNotes locally, follow these steps:

1. Clone the repository: `git clone https://github.com/code-devendra/iNotes-application.git`
2. Navigate to the project directory: `cd iNotes-application`
3. Install the required dependencies:
   - Backend: `cd backend && npm install`
   - Frontend: `cd frontend && npm install`
4. Configure the environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
     ```
     MONGODB_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret_key>
     ```
5. Start the backend server: `cd backend && npm start`
6. In a new terminal, start the frontend development server: `cd frontend && npm start`
7. Open your browser and visit `http://localhost:5173` to access iNotes.

## Contributing

We welcome contributions from the community to improve iNotes and make it even better. If you'd like to contribute, please follow these guidelines:

1. Fork the repository and create your branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m 'Add some feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a pull request with a detailed description of your changes.

## Contact

We value your feedback and are always open to hearing your thoughts, suggestions, or any issues you may encounter while using iNotes. Please feel free to reach out to us via email at [devendrakhinchi.work@gmail.com](mailto:devendrakhinchi.work@gmail.com). We appreciate your input and will strive to address any inquiries or feedback promptly.

## Acknowledgements

We would like to express our gratitude to the open-source community for providing invaluable resources and inspiration that made iNotes possible.

Thank you for choosing iNotes as your go-to note-making web application. We are excited to be a part of your journey towards enhanced productivity and organization. Start exploring our platform today and unlock your true potential!
