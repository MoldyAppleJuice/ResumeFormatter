function showDiv(name) {
   document.getElementById(name).style.display = "block";
}

function fillForm() {
  fill("firstname", "John");
  fill("lastname", "Doe");
  fill("email", "johndoe@example.com");
  fill("phone", "123-456-7890");
  fill("address1", "606-3727 Ullamcorper. Street");
  fill("home_city", "Roseville");
  fill("home_state", "NH");
  fill("zip", "11523");
  fill("country", "US");

  fill("school_name_1", "High School Name");
  fill("level", "Secondary");
  fill("school_city", "New York");
  fill("school_state", "New York");
  fill("grad_date1", "2018-08");

  fill("job_title", "Chief Executive Janitor");
  fill("job_location", "Janitors Association Inc.");
  fill("job_start1", "2018-08");
  fill("job_end1", "2018-08");
  fill("job_description", "The best janitor");

  fill("activity_title", "Young Janitors of America");
  fill("position_title", "President");
  fill("activity_location", "College");
  fill("activity_start1", "2018-08");
  fill("activity_end1", "2018-08");
  fill("activity_description", "I led young janitors");
}

function fill(id, val) {
  document.getElementById(id).value = val;
}
