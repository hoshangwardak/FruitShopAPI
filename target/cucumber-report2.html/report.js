$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addPhoto.feature");
formatter.feature({
  "name": "Add a photo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a photo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@photo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is able to add a photo",
  "keyword": "When "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addPhoto_stepDefinitions.user_is_able_to_add_a_photo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is display the photo",
  "keyword": "And "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addPhoto_stepDefinitions.user_is_display_the_photo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the photo",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addPhoto_stepDefinitions.verify_the_photo()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});