# 🔑 Simple Login Page

A simple full-stack login and registration application using **Node.js**, **Express**, and **MySQL**.

## ✨ Features

- **User Registration**: Create a new account.
- **User Login**: Authenticate with existing credentials.
- **Protected Redirect**: Redirects to a home page upon successful login.

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/)

## 📁 Project Structure

The project follows a simple MVC-like structure:

- `public/`: Contains frontend files (HTML, CSS, JS) served statically.
- `src/`: Contains backend source code.
  - `config/`: Configuration files (e.g., database connection).
  - `server.js`: Main entry point for the API server.
- `scripts/`: Utility scripts (e.g., database setup).

## 🚀 Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Database Setup**:
    - **Automated Setup (Recommended)**:
      Ensure your MySQL server is running and your `.env` file is configured (see step 4). Then run:
      ```bash
      node scripts/setup_database.js
      ```
    - **Manual Setup**:
      - Create a database (e.g., `simple_login`).
      - Create a `users` table with columns `id`, `name`, and `password`.

4.  **Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add your database configuration:
      ```env
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=your_password
      DB_NAME=simple_login
      PORT=3000
      ```

## 🚦 Running the Application

1.  **Start the Backend Server**:
    ```bash
    node src/server.js
    ```
    You should see: `Server running at http://localhost:3000` and `Connected to MySQL Database`.

2.  **Access the Application**:
    - Open your browser and visit: `http://localhost:3000`

## 🔌 API Endpoints

- `POST /register`: Registers a new user.
  - Body: `{ "name": "user", "password": "pass" }`
- `POST /login`: Authenticates a user.
  - Body: `{ "name": "user", "password": "pass" }`

## 🔍 Troubleshooting

- **Failed to connect to server**: Ensure the Node.js server is running (`node src/server.js`) and you are accessing the correct port (default 3000).
- **MySQL Connection Error**: Check your `.env` file credentials and ensure the MySQL service is active.