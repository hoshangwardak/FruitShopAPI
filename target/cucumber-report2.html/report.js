$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/add.feature");
formatter.feature({
  "name": "add new product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "create a vendor for the product",
  "keyword": "When "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addProduct_stepDefinitions.create_a_vendor_for_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add a new product",
  "keyword": "When "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addProduct_stepDefinitions.user_add_a_new_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to verify the new",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addProduct_stepDefinitions.user_is_able_to_verify_the_new()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user is able to update a name and a price of the fruit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is update a  name and a price",
  "keyword": "When "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addProduct_stepDefinitions.user_is_update_a_name_and_a_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to verify the updated name and a price",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addProduct_stepDefinitions.user_is_able_to_verify_the_updated_name_and_a_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list the product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.addProduct_stepDefinitions.list_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});