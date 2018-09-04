from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def survey():
    return render_template("form.html")

@app.route('/result',methods = ['POST', 'GET'])
def result():
    personal = dictChunk(getSet(request.form, "personal"), [{}])
    edu = dictChunk(getSet(request.form, "edu"), [{}])
    job = dictChunk(getSet(request.form, "job"), [{}])
    act = dictChunk(getSet(request.form, "act"), [{}])

    return render_template("result.html", personal=personal, edu=edu, job=job, act=act)

def getSet(results, qID):
  new_dict = {}
  for key in results:
    if key.split("_")[0] == qID:
      new_dict[key] = results[key]
  return new_dict

def dictChunk(d, d_list):
  cur_num = 0
  for key,value in d.items():
    key_split = key.split("_")
    if int(key_split[len(key_split)-1]) != cur_num:
      cur_num += 1
      d_list.append({})
    del key_split[len(key_split)-1]
    key = "_".join(key_split)
    (d_list[cur_num])[key] = value
  return d_list

if __name__ == '__main__':
   app.run(debug = True)
