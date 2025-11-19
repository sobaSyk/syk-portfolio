from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template(
        "index.html",
        welcome="Welcome",
        name="Muhammad Syukran Bin Shaari",
        tagline="I'm a <span class='accent underline'>Web Developer</span>",
        blurb="Passionate about solving complex problems by developing high-performance, user-centric web solutions. I blend technical expertise with functional development to bring your vision to life."
    )

if __name__ == "__main__":
    app.run(debug=True)
