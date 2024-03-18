from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World'

@app.route('/test')
def test():
    return '<h1>Test World</h1>'

if __name__ == "__main__":
    app.run()