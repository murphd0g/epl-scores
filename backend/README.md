# epl-scores Backend Documentation

## Overview
The `epl-scores` backend is built using Python and Flask. It serves as the API for the application, handling requests from the frontend and managing data interactions.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/epl-scores.git
   cd epl-scores/backend
   ```

2. **Create a Virtual Environment**
   It is recommended to create a virtual environment to manage dependencies.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   Install the required Python packages listed in `requirements.txt`.
   ```bash
   pip install -r requirements.txt
   ```

## Usage

To run the Flask application, execute the following command:
```bash
python app.py
```

The application will start on `http://127.0.0.1:5000/` by default.

## API Endpoints

- **GET /api/scores**: Retrieve the latest EPL scores.
- **POST /api/scores**: Submit new scores (requires authentication).

## Additional Information

Ensure that you have the necessary permissions and configurations set up for any databases or external services that the application may interact with. 

For further details on the API and its usage, refer to the code comments in `app.py`.