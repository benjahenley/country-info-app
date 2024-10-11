# 🌍 Country Info App

This repository contains both the **frontend** (Next.js/React) and **backend** (Node.js/Express) components of the Country Info App. The app provides detailed information about countries, including their population data, borders, and flags.

## Project Overview

### Folder Structure

country-info-app/
├── frontend/             
│   ├── package.json
│   ├── .env
│   └── src/
├── backend/            
│   ├── package.json
│   ├── .env
│   └── src/
└── README.md           

# Project documentation


---

## 🚀 Frontend (Next.js)

### Tech Stack:
- **Next.js (React)**
- **Tailwind CSS** for modern styling
- **Axios** for API requests
- **Chart.js** for population charts
- **Framer Motion** for smooth animations

### Key Features:
1. **Country List Page**:
    - Fetches and displays a list of available countries from the backend.
    - Each country is clickable, linking to a detailed Country Info Page.

2. **Country Info Page**:
    - Displays country details: name, flag, borders, and a population chart over time.
    - Shows clickable border countries, allowing users to navigate between countries.

### Frontend Setup:

1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file:
    ```bash
    NEXT_PUBLIC_BACKEND_URL=http://localhost:9000
    ```

4. Start the frontend server:
    ```bash
    npm run dev
    ```

The frontend will run at [http://localhost:3000](http://localhost:3000).

---

## 🛠 Backend (Express.js)

### Tech Stack:
- **Node.js (Express.js)**
- **Axios** for making API requests

### API Endpoints:
1. **Get Available Countries**:
    - Fetches a list of countries using the [Nager.Date API](https://date.nager.at/api/v3/AvailableCountries).
    - Endpoint: `GET /api/countries`

2. **Get Country Info**:
    - Fetches detailed info about a specific country, including:
        - Border countries
        - Population data (via [CountriesNow API](https://countriesnow.space/))
        - Country flag
    - Endpoint: `GET /api/country/:code`

### Backend Setup:

1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file:
    ```bash
    PORT=9000
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

The backend will run at [http://localhost:9000](http://localhost:9000).

---

## ⚙️ Running the Project

1. **Start both servers**:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend**: [http://localhost:9000](http://localhost:9000)
   
2. **Access the app**: Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📑 API Documentation

### Frontend API Usage:
- **List of Available Countries**: `GET /api/countries`
- **Country Info**: `GET /api/country/:code`

### Example of API Data:
- **Borders**: A list of countries that border the selected country.
- **Population**: Historical population data for chart rendering.
- **Flag URL**: The country’s flag image URL.

---

## 🛡 Environment Variables

- **Frontend**: 
    - `NEXT_PUBLIC_BACKEND_URL`: Set this to the URL of the backend (`http://localhost:9000` for local development).
    
- **Backend**:
    - `PORT`: The port where the backend will run (default: `9000`).

---

## 📝 Code Quality

- **ESLint** and **Prettier** are used in both the frontend and backend to ensure consistent code formatting and quality.
- Run linting checks before committing code to ensure clean, maintainable code.

---

## 🔗 Additional Instructions

### Separate Folders:
The **frontend** and **backend** are separated into different folders to allow for easy independent development. Ensure that you run both servers in parallel for the app to function correctly.

### Parallel Execution:
- The frontend runs on port **3000**.
- The backend runs on port **9000**.
- Ensure both servers are running to allow the frontend to communicate with the backend.
