from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def survey():
    return render_template("form.html")

@app.route('/result',methods = ['POST', 'GET'])
def result():
    for key, value in request.form.items():
        print(key, ":", value)
    #print(request.form)
    return render_template("result.html", result=request.form)

if __name__ == '__main__':
   app.run(debug = True)
