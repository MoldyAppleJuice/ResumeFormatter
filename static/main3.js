function fillForm() {
  document.getElementById("edu_add").click();
  document.getElementById("exp_add").click();
  document.getElementById("exp_add").click();

  fill("personal_firstname_0", "John");
  fill("personal_lastname_0", "Doe");
  fill("personal_email_0", "johndoe@example.com");
  fill("personal_number_0", "123-456-7890");
  fill("personal_address1_0", "606-3727 Ullamcorper. Street");
  fill("personal_address2_0", "address line 2");
  fill("personal_city_0", "Roseville");
  fill("personal_state_0", "NH");
  fill("personal_zip_0", "11523");
  fill("personal_country_0", "US");

  fill("edu_name_0", "High School Name");
  fill("edu_level_0", "Secondary");
  fill("edu_city_0", "New York");
  fill("edu_state_0", "New York");
  fill("edu_grad_date_0", "2018-08");

  fill("edu_name_1", "College Name");
  fill("edu_level_1", "Bachelors");
  fill("edu_city_1", "Chicago");
  fill("edu_state_1", "Illinois");
  fill("edu_grad_date_1", "2021-08");

  fill("job_title_0", "Chief Executive Janitor");
  fill("job_company_0", "Janitors Association Inc.");
  fill("job_location_0", "Chicago, IL");
  fill("job_start_date_0", "2018-08");
  fill("job_end_date_0", "2018-08");
  fill("job_description_0", "The best janitor");

  fill("job_title_1", "Junior Janitor");
  fill("job_company_1", "Janitors Association Inc.");
  fill("job_location_1", "Evanston, IL");
  fill("job_start_date_1", "2018-08");
  fill("job_end_date_1", "2018-08");
  fill("job_description_1", "The second best janitor");

  fill("job_title_2", "Associate Janitor");
  fill("job_company_2", "Janitors Association Inc.");
  fill("job_location_2", "Ann Arbor, Michigan");
  fill("job_start_date_2", "2018-08");
  fill("job_end_date_2", "2018-08");
  fill("job_description_2", "The most ok janitor");

  fill("act_name_0", "Young Janitors of America");
  fill("act_title_0", "President");
  fill("act_location_0", "College");
  fill("act_start_date_0", "2018-08");
  fill("act_end_date_0", "2018-08");
  fill("act_description_0", "I led young janitors");
}

function fill(id, val) {
  document.getElementById(id).value = val;
}
