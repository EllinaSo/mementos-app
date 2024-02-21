# Mementos - Full Stack MERN Project

### Overview

This project is a simple social media MERN application that allows users to post interesting events that happened in their lives. The purpose of this project is learning MERN stack. This project was created by following [the JavaScript Mastery channel's tutorial](https://youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&si=A-BGWHvQJrqb3J9R). Functionality:

- Creating post with image
- Editing post
- Liking post
- Deleting post

### Technologies

- MongoDB Atlas Database
- Express.js
- React.js (CRA)
- Node.js
- Material UI
- Redux
- Axios
- Deploy: GitHub Pages (frontend) & Railway (backend)

### How to Run

Clone the repository, it contains both frontend and backend code.

##### Frontend

1. In terminal move to `frontend` folder and install dependencies with `pnpm i` command.
2. Start server with `pnpm start` command. It will open page [http://localhost:3000](http://localhost:3000) automatically.

##### Backend

1. In terminal move to `backend` folder and install dependencies with `pnpm i` command.
2. Create a `.env` file in the directory and fill it according to the `.env.example` file. You might need to create an account on the [MongoDB Atlas Database site](https://www.mongodb.com/atlas/database) to get `CONNECTION_URL`.
3. Start server with `pnpm start` command. It will start on [http://localhost:5000](http://localhost:5000) by default.
