/* function to create the label for the question
 * params:
 *   section: string representing the div the question belongs to
 *    qLabel: the text to be displayed with the question
 */
function createTitle(section, qLabel) {
  var node = document.createElement("STRONG");
  var textnode = document.createTextNode(qLabel);
  node.appendChild(textnode);
  document.getElementById(section).appendChild(node);
}

/* function to make break tags to separate questions
 * params:
 *   section: string representing the div the break is going after
 */
function makeBreak(section) {
  document.getElementById(section).appendChild(document.createElement("BR"));
  document.getElementById(section).appendChild(document.createElement("BR"));
}

/* function that abstracts creating each type of question
 * params:
 *      section: string representing the div the question belongs to
 *       qLabel: string representing text to display for the question
 *          qID: string representing the name/id of the question
 *   attributes: a dictionary containing the attributes needed for the question
 */
function addQuestion(section, qLabel, qID, attributes) {
  //create the label for the question
  createTitle(section, qLabel);

  //create the HTML element using Javascript
  var inNode = document.createElement(attributes["qType"]);
  //loop through the dictionary to apply attributes to the question
  for (var key in attributes) {
    inNode.setAttribute(key, attributes[key]);
  }
  //place element on HTML page
  document.getElementById(section).appendChild(inNode);

  //add break between questions
  makeBreak(section);
}

/* function to add questions with text input */
function addTextQuestion(section, qLabel, qID) {
  var attributes = {
    "qType":"INPUT",
    "type":"text",
    "name":qID,
    "id":qID
  };
  addQuestion(section, qLabel, qID, attributes);
}

/* function to add questions with email input */
function addEmailQuestion(section, qLabel, qID) {
  var attributes = {
    "qType":"INPUT",
    "type":"email",
    "name":qID,
    "id":qID
  };
  addQuestion(section, qLabel, qID, attributes);
}

/* function to add question with date */
function addDateQuestion(section, qLabel, qID) {
  var attributes = {
    "qType":"INPUT",
    "type":"month",
    "name":qID,
    "id":qID
  };
  addQuestion(section, qLabel, qID, attributes);
}

/* function to add long input type question  */
function addLongQuestion(section, qLabel, qID) {
  var attributes = {
    "qType":"TEXTAREA",
    "rows":4,
    "cols":50,
    "name":qID,
    "id":qID
  };
  addQuestion(section, qLabel, qID, attributes);
}

/* function to add question with list options
 * params:
 *   options: list representing the value/text of the options
 */
function addListQuestion(section, qLabel, qID, options) {
  createTitle(section, qLabel);

  //create the `select` element for the dropdown with name/id set as `qID` and appends to div
  var selectList = document.createElement("SELECT");
  selectList.setAttribute("name", qID);
  selectList.setAttribute("id", qID);
  document.getElementById(section).appendChild(selectList);

  //loops through `options` and adds each element to the dropdown
	for(var i=0; i<options.length; i+=2){
      var option = document.createElement("option");
      option.setAttribute("value", options[i]);
      var text = document.createTextNode(options[i+1]);
      option.appendChild(text);
      document.getElementById(qID).appendChild(option);
  }

  makeBreak(section);
}

var personal = {
  "name":"personal",
  "id_tags":["personal_firstname", "personal_lastname", "personal_email", "personal_number", "personal_address1", "personal_address2",
                  "personal_city", "personal_state", "personal_zip", "personal_country"],
  "labels":['First name* ', 'Last name* ', 'Email* ', 'Phone Number* ', 'Address Line 1* ',
                'Address Line 2* ', 'City* ', 'State* ', 'Zip* ', 'Country* ',],
  "qTypes":["text", "text", "email", "text", "text", "text", "text", "text", "text", "list"],
  "list_info":[" ", "(please select a country)", "AF", "Afghanistan",
                  "AL", "Albania", "DZ", "Algeria",
                  "AS", "American Samoa", "AD", "Andorra",
                  "AO", "Angola", "AI", "Anguilla"]
};

var education = {
  "name":"education",
  "id_tags":["edu_name", "edu_level", "edu_city", "edu_state", "edu_grad_date"],
  "labels":["School* ", "Level of Education* ", "City/Town* ", "State* ", "Graduation Date* "],
  "qTypes":["text", "list", "text", "text", "month"],
  "list_info":["Elementary", "Elementary", "Secondary", "Secondary", "Bachelors", "Bachelors", "Masters", "Masters", "Doctorate", "Doctorate"]
};

var experience = {
  "name":"experience",
  "id_tags":["job_title", "job_company", "job_location", "job_start_date", "job_end_date", "job_description"],
  "labels":["Job Title* ", "Company* ", "Job Location* ", "Job Start Date* ", "Job End Date* ", "Job Description* "],
  "qTypes":["text", "text", "text", "month", "month", "long"]
};

var activity = {
  "name":"activity",
  "id_tags":["act_name", "act_title", "act_location", "act_start_date", "act_end_date", "act_description"],
  "labels":["Name of Activity* ", "Activity Title* ", "Activity Location* ", "Activity Start Date* ", "Activity End Date* ", "Activity Description* "],
  "qTypes":["text", "text", "text", "month", "month", "long"]
};

/* function to add new set of questions to div
 * params:
 *   section: the object representing the section
 */
var perCount = 0;
var eduCount = 0;
var expCount = 0;
var actCount = 0;
function addSection(section) {
  var count;
  if (section["name"] == "personal") {
    count = perCount;
  } else if (section["name"] == "education") {
    count = eduCount++;
  } else if (section["name"] == "experience") {
    count = expCount++;
  } else if (section["name"] == "activity") {
    count = actCount++;
  }
  var id_tag = section["id_tags"];
  var label = section["labels"];
  var qType = section["qTypes"];
  var list_info = section["list_info"];

  for (var i=0; i<qType.length; i++) {
    if (qType[i] == "text") {
      addTextQuestion(section["name"], label[i], id_tag[i] + "_" + count);
    } else if (qType[i] == "email") {
      addEmailQuestion(section["name"], label[i], id_tag[i] + "_" + count);
    } else if (qType[i] == "list") {
      addListQuestion(section["name"], label[i], id_tag[i] + "_" + count, list_info);
    } else if (qType[i] == "month") {
      addDateQuestion(section["name"], label[i], id_tag[i] + "_" + count);
    } else if (qType[i] == "long") {
      addLongQuestion(section["name"], label[i], id_tag[i] + "_" + count);
    }
  }
}

/* self-invoking function to automatically create one module for each div */
(function () {
  addSection(personal);
  addSection(education);
  addSection(experience);
  addSection(activity);
}());
