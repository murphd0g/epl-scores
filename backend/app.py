from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/scores', methods=['GET'])
def get_scores():
    # Get date from query params, default to today if not provided
    date = request.args.get('date')
    url = "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard"
    if date:
        url += f"?dates={date}"

    headers = {
        "cache-control": "no-cache"
    }
    response = requests.get(url, headers=headers)
    data = response.json()

    events = data.get("events", [])
    scores = []
    for event in events:
        competition = event.get("competitions", [])[0]
        home = competition["competitors"][0]
        away = competition["competitors"][1]
        scores.append({
            "home_team": home["team"]["displayName"],
            "home_score": home["score"],
            "away_team": away["team"]["displayName"],
            "away_score": away["score"],
            "venue": competition["venue"]["fullName"],
            "status": competition["status"]["type"]["description"]
        })

    return jsonify(scores)

if __name__ == '__main__':
    app.run(debug=True)