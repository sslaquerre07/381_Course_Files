from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

list1 = []

@app.route("/Products", methods=['POST'])
def addProduct():
    data = request.get_json()
    list1.append(data)
    print(list1)
    return jsonify({"message": "Success"}), 200
   
   
if __name__ == "__main__":
    app.run()
