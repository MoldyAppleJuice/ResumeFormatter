from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def survey():
    return render_template("form.html")

@app.route('/result',methods = ['POST', 'GET'])
def result():
    for key, value in request.form.items():
        print(key, ":", value)
    if ("address2" in request.form):
        print("address2 in request.form")
    return render_template("result.html", result=request.form)
