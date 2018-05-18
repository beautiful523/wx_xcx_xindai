from flask import Flask, jsonify

app = Flask(__name__)
app.config["SECRET_KEY"] = "123456"


# 登录
@app.route("/", methods=["GET"])
def login():
    result = [
            {
                'logo': '/images/pro_01.jpg',
                'title': 'title01',
                'desc': 'text01',
            },
            {
                'logo': '/images/pro_02.jpg',
                'title': 'title02',
                'desc': 'text02',
            },
            {
                'logo': '/images/pro_03.jpg',
                'title': 'title03',
                'desc': 'text03',
            },
    ]
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
