/* Global variables; objects representing the content of each module */
var personal = {
  "name":"personal",
  "id_tags":["personal_firstname", "personal_lastname", "personal_email", "personal_number", "personal_address1", "personal_address2",
                  "personal_city", "personal_state", "personal_zip", "personal_country"],
  "labels":['First name* ', 'Last name* ', 'Email* ', 'Phone Number* ', 'Address Line 1* ',
                'Address Line 2* ', 'City* ', 'State* ', 'Zip* ', 'Country* ',],
  "qTypes":["text", "text", "email", "text", "text", "text", "text", "text", "text", "list"],
  "list_info":{" ":"(please select a country)"},
  "count":0
};

var education = {
  "name":"education",
  "id_tags":["edu_name", "edu_level", "edu_city", "edu_state", "edu_grad_date"],
  "labels":["School* ", "Level of Education* ", "City/Town* ", "State* ", "Graduation Date* "],
  "qTypes":["text", "list", "text", "text", "month"],
  "list_info":{"Elementary":"Elementary",
               "Secondary":"Secondary",
               "Bachelors":"Bachelors",
               "Masters":"Masters",
               "Doctorate":"Doctorate"},
  "count":0
};

var experience = {
  "name":"experience",
  "id_tags":["job_title", "job_company", "job_location", "job_start_date", "job_end_date", "job_description"],
  "labels":["Job Title* ", "Company* ", "Job Location* ", "Job Start Date* ", "Job End Date* ", "Job Description* "],
  "qTypes":["text", "text", "text", "month", "month", "long"],
  "count":0
};

var activity = {
  "name":"activity",
  "id_tags":["act_name", "act_title", "act_location", "act_start_date", "act_end_date", "act_description"],
  "labels":["Name of Activity* ", "Activity Title* ", "Activity Location* ", "Activity Start Date* ", "Activity End Date* ", "Activity Description* "],
  "qTypes":["text", "text", "text", "month", "month", "long"],
  "count":0
};

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
 *       qiType: string representing the type of question
 */
function addQuestion(section, qLabel, qID, qiType) {
  createTitle(section, qLabel);

  //get the attributes based on the question input type
  var attributes = getAttributes(qiType);
  attributes["name"] = qID;
  attributes["id"] = qID;

  //create the HTML element using Javascript
  var inNode = document.createElement(attributes["qType"]);
  //delete qType so it isn't part of HTML element
  delete attributes.qType;

  //loop through the dictionary to apply attributes to the question
  for (var key in attributes) {
    inNode.setAttribute(key, attributes[key]);
  }
  //place element on HTML page
  document.getElementById(section).appendChild(inNode);
  document.getElementById(qID).required = true;

  makeBreak(section);
}

/* function to get the basic attributes of a question type
 * params:
 *   qType: string representing the question type
 * returns:
 *   an object representing the basic attributes of the question
 */
function getAttributes(qType) {
  if (qType == "text") {
    return {"qType":"INPUT", "type":"text"};
  } else if (qType == "email") {
    return {"qType":"INPUT", "type":"email"};
  } else if (qType == "month") {
    return {"qType":"INPUT", "type":"month"};
  } else if (qType == "long") {
    return {"qType":"TEXTAREA", "rows":4, "cols":50};
  }
}

/* function to add question with list options
 * params:
 *   options: dictionary representing the value/text of the options
 */
function addListQuestion(section, qLabel, qID, options) {
  createTitle(section, qLabel);

  //create the `select` element for the dropdown with name/id set as `qID` and appends to div
  var selectList = document.createElement("SELECT");
  selectList.setAttribute("name", qID);
  selectList.setAttribute("id", qID);
  document.getElementById(section).appendChild(selectList);

  //loops through `options` and adds each element to the dropdown
  for (var key in options) {
    var option = document.createElement("option");
    option.setAttribute("value", key);
    var text = document.createTextNode(options[key]);
    option.appendChild(text);
    document.getElementById(qID).appendChild(option);
  }

  document.getElementById(qID).required = true;

  makeBreak(section);
}

/* function to add new set of questions to div
 * params:
 *   section: the object representing the section
 */
function addSection(section) {
  var id_tag = section["id_tags"];
  var label = section["labels"];
  var qType = section["qTypes"];
  var list_info = section["list_info"];
  var count = section["count"]++;

  if (count >= 1) {
    makeBreak(section["name"]);
  }

  for (var i=0; i<qType.length; i++) {
    if (qType[i] == "list") {
      addListQuestion(section["name"], label[i], id_tag[i] + "_" + count, list_info);
    } else {
      addQuestion(section["name"], label[i], id_tag[i] + "_" + count, qType[i]);
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
