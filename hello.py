from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def survey():
    return render_template("form.html")

@app.route('/result',methods = ['POST', 'GET'])
def result():
    for key, value in request.form.items():
        print(key, ":", value)
    #personal info is a dictionary containing all the personal info of the person
    personal_info = {}

    #edu_info is a list containing dictionaries, where each dictionary contains one education block
    edu_info = []

    #job_info is a list containing dictionaries, where each dictionary contains one job block
    job_info = []

    #act_info is a list containing dictoinaries, where each dictionary contains one activity block
    act_info = []
    return render_template("result.html", result=request.form)

if __name__ == '__main__':
   app.run(debug = True)
