from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/scores', methods=['GET'])
def get_scores():
    # Placeholder for actual score data
    scores = [
        {"team1": "Team A", "team2": "Team B", "score": "1-2"},
        {"team1": "Team C", "team2": "Team D", "score": "3-1"}
    ]
    return jsonify(scores)

if __name__ == '__main__':
    app.run(debug=True)