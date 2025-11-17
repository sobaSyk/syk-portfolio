from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    # Data you can customize later
    data = {
        "welcome": "Welcome to my portfolio website.",
        "name": "Muhammad Syukran Bin Shaari",
        "tagline": "I'm a <span class='accent underline'>Web Developer</span>",
        "blurb": "Passionate about solving complex problems by developing high-performance, user-centric web solutions. I blend technical expertise with functional development to bring your vision to life."
    }
    return render_template('index.html', **data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)