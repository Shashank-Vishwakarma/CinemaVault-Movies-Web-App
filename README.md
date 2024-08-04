# CinemaVault - A Movie Streaming App like Netflix
This is a web app for streaming movies built using MERN stack.
This app utilizes the TMDB API for the purpose of getting movies and tv shows related details.

## Features
1. Login
2. Sign Up
3. Logout
4. Movies Page
5. Movies by category
6. TV shows Page
7. TV shows by category
8. Search for movie
9. Play trailers for movies or tv shows

## Screenshots

![home](https://github.com/user-attachments/assets/87d884cb-1edc-4b90-a35c-046aeced90ba)

![home-2](https://github.com/user-attachments/assets/6d9d9e35-b04d-48d0-8d21-4c18279a4f84)

![search](https://github.com/user-attachments/assets/9dacc7e4-a63b-4592-a557-d37af1fc9d95)

![history](https://github.com/user-attachments/assets/23baf624-86b8-47c0-8e30-2af1b13ba753)

## Setup
1. Create a .env file in the root directory.
2. Put these environment variables in .env file.
```
PORT=....
MONGODB_URL=....
JWT_SECRET_KEY=....
NODE_ENV=....
TMDB_API_TOKEN=....
```

## Frontend setup
Move to client folder and run below commands:
```
npm install
npm run dev
```

## Backend setup
In the root directory, run the below commands:
```
npm install
npm run server
```
