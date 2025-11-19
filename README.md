# epl-scores Project

## Overview
The epl-scores project is a web application that provides real-time scores and updates for English Premier League matches. It consists of a Python backend built with Flask and an Angular frontend.

## Project Structure
```
epl-scores/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
├── frontend/
│   ├── angular.json
│   ├── package.json
│   ├── public/
│   │   └── favicon.ico
│   ├── README.md
│   ├── src/
│   │   ├── app/
│   │   │   └── services/
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
├── .gitignore
└── README.md
```

## Getting Started

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```
   python app.py
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install the required npm packages:
   ```
   npm install
   ```
3. Start the Angular application:
   ```
   ng serve
   ```

## Usage
- Access the backend API at `http://localhost:5000` (or the port specified in `app.py`).
- Access the frontend application at `http://localhost:4200` (or the port specified in the Angular configuration).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.