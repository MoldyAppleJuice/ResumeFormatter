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

/* function to add questions with text input
 * params:
 *   section: string representing the div the question belongs to
 *    qLabel: string representing text that goes with the question
 *       qID: string representing the name/id of the question
 */
function addTextQuestion(section, qLabel, qID) {
  createTitle(section, qLabel);

  //creates text input field with name and id of `qID` and appends to div
  var inNode = document.createElement("INPUT");
  inNode.setAttribute("type", "text");
  inNode.setAttribute("name", qID);
  inNode.setAttribute("id", qID);
  document.getElementById(section).appendChild(inNode);

  makeBreak(section);
}

/* function to add questions with email input
 * params:
 *   section: string representing the div the question belongs to
 *    qLabel: string representing text that goes with the question
 *       qID: string representing the name/id of the question
 */
function addEmailQuestion(section, qLabel, qID) {
  createTitle(section, qLabel);

  //creates text input field with name and id of `qID` and appends to div
  var inNode = document.createElement("INPUT");
  inNode.setAttribute("type", "email");
  inNode.setAttribute("name", qID);
  inNode.setAttribute("id", qID);
  document.getElementById(section).appendChild(inNode);

  makeBreak(section);
}

/* function to add questions with email input
 * params:
 *   section: string representing the div the question belongs to
 *    qLabel: string representing text that goes with the question
 *       qID: string representing the name/id of the question
 */
function addPhoneQuestion(section, qLabel, qID) {
  createTitle(section, qLabel);

  //creates text input field with name and id of `qID` and appends to div
  var inNode = document.createElement("INPUT");
  inNode.setAttribute("type", "tel");
  inNode.setAttribute("name", qID);
  inNode.setAttribute("id", qID);
  inNode.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
  document.getElementById(section).appendChild(inNode);

  makeBreak(section);
}

/* function to add question with list options
 * params:
 *   section: string representing the div the question belongs to
 *    qLabel: string representing text that goes with the question
 *       qID: string representing the name/id of the question
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

//global variable representing how often button has been clicked
var sectionClicked = 0;

/* function to add new set of questions to div
 *
 */
function addSection() {
  //represents the base id string; each set of questions will have the clicks appended to it
  //valid id: personal_firstname_1
  var id_tags = ["personal_firstname", "personal_lastname", "personal_email", "personal_number", "personal_address1", "personal_address2",
                  "personal_city", "personal_state", "personal_zip", "personal_country"];
  sectionClicked++;

  // //options for education levels
  // var level_options = ["Elementary", "Secondary", "Bachelors", "Masters", "Doctorate"];

  var countries = [" ", "(please select a country)", "AF", "Afghanistan",
                  "AL", "Albania", "DZ", "Algeria",
                  "AS", "American Samoa", "AD", "Andorra",
                  "AO", "Angola", "AI", "Anguilla"];

  addTextQuestion('personal', 'First name* ', id_tags[0] + "_" + sectionClicked);
  addTextQuestion('personal', 'Last name* ', id_tags[1] + "_" + sectionClicked);
  addEmailQuestion('personal', 'Email* ', id_tags[2] + "_" + sectionClicked);
  addTextQuestion('personal', 'Phone Number* ', id_tags[3] + "_" + sectionClicked);
  addTextQuestion('personal', 'Address Line 1* ', id_tags[4] + "_" + sectionClicked);
  addTextQuestion('personal', 'Address Line 2* ', id_tags[5] + "_" + sectionClicked);
  addTextQuestion('personal', 'City* ', id_tags[6] + "_" + sectionClicked);
  addTextQuestion('personal', 'State* ', id_tags[7] + "_" + sectionClicked);
  addTextQuestion('personal', 'Zip* ', id_tags[8] + "_" + sectionClicked);
  addListQuestion('personal', 'Country* ', id_tags[9] + "_" + sectionClicked, countries);
}

/* function used to fill data in form; used to validate ids are working properly
 *
 */
function fillData() {
  document.getElementById('personal_firstname_1').value = "John";
  document.getElementById('personal_lastname_1').value = "Doe";

  document.getElementById('personal_firstname_2').value = "Jane";
  document.getElementById('personal_lastname_2').value = "Doe";

  document.getElementById('school_level_1').value = "Secondary";
  document.getElementById('school_level_2').value = "Masters";
}
