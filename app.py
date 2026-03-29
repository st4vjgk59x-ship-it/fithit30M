from flask import Flask, jsonify, render_template
import requests
import datetime
import os

app = Flask(__name__)

API_KEY = os.getenv("API_KEY")
headers = {"x-apisports-key": API_KEY}


MAX_MATCHES_TO_PROCESS = 15
MAX_TIPS_TO_RETURN = 5


def get_tips():
    today = datetime.date.today().strftime("%Y-%m-%d")
    url = f"https://v3.football.api-sports.io/fixtures?date={today}"

    try:
        res = requests.get(url, headers=headers, timeout=10).json()
        matches = res.get("response", [])
    except Exception:
        return []

    tips = []

    for m in matches[:MAX_MATCHES_TO_PROCESS]:
        home = m['teams']['home']['name']
        away = m['teams']['away']['name']

        goals_home = m['goals']['home'] or 0
        goals_away = m['goals']['away'] or 0

        total = goals_home + goals_away

        if total >= 3:
            tip = "💣 BTTS + Over 2.5"
        elif goals_home > goals_away:
            tip = "🏠 Home Win + BTTS"
        elif goals_away > goals_home:
            tip = "✈️ Away Win + BTTS"
        else:
            tip = "⚖️ Draw"

        tips.append({
            "match": f"{home} vs {away}",
            "tip": tip
        })

    return tips[:MAX_TIPS_TO_RETURN]


@app.route("/")
def home():
    return render_template("index.html", active_tab="football")


@app.route("/fitness")
def fitness():
    return render_template("index.html", active_tab="fitness")


@app.route("/api/tips")
def api_tips():
    return jsonify(get_tips())


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
