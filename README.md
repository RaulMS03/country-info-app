# Country Info App

## Description

The Country Info App is a full-stack application that provides detailed information about countries. Users can view a list of available countries, explore specific country details, including borders and population data, and visualize this data through charts.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: React.js with Next.js
- **Database**: None (API-based)
- **Styling**: Tailwind CSS (or custom CSS)

## Features

- **Country List Page**: Displays a list of available countries.
- **Country Info Page**: Shows detailed information about a selected country, including:
  - Country name
  - Country flag
  - List of bordering countries
  - Population over time in chart format

## Getting Started

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd country-info-backend
2. **Install dependencies**:
    ```bash
    npm install
    # or
    npm i
3. **Create a ```.env``` file in the backend directory with the following content**:
   ```bash
   PORT=5000
4. **Start the server**:
    ```bash
    npm start
### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd country-info-frontend
2. **Install dependencies**:
   ```bash
    npm install
    # or
    npm i
3. **Start the development server**:
    ```bash
    npm run dev
# Usage
- Visit http://localhost:3000 to access the application.
- Navigate through the list of countries to view details and population data.

# API Endpoints
- **GET** ```/api/countries``` 
    - Description: Retrieves a list of available countries.
- **GET** ```/api/country-info/:countryCode```
    - Description: Retrieves detailed information about a specific country, including borders and population data.