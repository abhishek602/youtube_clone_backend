# YouTube Application Backend API
This project is a backend API for a YouTube-like application, designed to manage user interactions such as registration, login, video uploads, and commenting on videos. Built with a focus on security and efficiency, the API leverages Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT) for authentication.

# Features
User Authentication: Secure registration and login processes.
Video Upload: Allows users to upload videos seamlessly.
Comments: Users can comment on videos to engage with content.
JWT Authentication: Implements JWT for secure access to the API.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
Node.js
MongoDB
npm or yarn

# Installing
Clone the repository to your local machine:

git clone https://github.com/abhishek602/youtube_clone_backend.git

cd your-project-name

# Install the project dependencies:


npm install

or if you prefer using yarn:

yarn install

# Configuration

Create a .env file in the root directory of the project. This file should include:

PORT= XXXX 

MONGODB_URL=  replace with your mongodb cluster connection url

CORS_ORIGIN=*

ACCESS_TOKEN_SECRET= your secret key

ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET= your secret key 

REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=  your cloudinary info

CLOUDINARY_API_KEY= cloudinary secret key

CLOUDINARY_API_SECRET= cloudinary api secret

Replace neccessary info about MongoDB database  and a secret key for JWT and cloudinary.

# Running the server

To start the server, run:

npm start

or if you are using yarn:

yarn start

The server will start running on http://localhost:3000.

# API Endpoints

Below is a brief overview of some of the available endpoints. 

* POST /api/v1/users/register: Register a new user.

* POST /api/v1/users/login: Login an existing user.

* POST /api/v1/users/logout: Logout an existing user.

* POST /api/v1/users/refresh-token: Refresh the token after timeout of an existing access token.

* POST /api/v1/users/current-user: Get the information about current user.

* PATCH /api/v1/users/update-account: Update the account details of an existing user.
* PATCH /api/v1/users/avatar: Update avatar image an existing user.
* PATCH /api/v1/users/cover-image: Update cover image an existing user.
* GET /api/v1/users/history: Get watch history of an user.

# Built With

Node.js - The runtime environment

Express.js - The web framework

MongoDB - The database

JWT - Authentication mechanism


# Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc
