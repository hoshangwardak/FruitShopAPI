$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/gettingAllVendors.feature");
formatter.feature({
  "name": "Add a new product for an existing vendor",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding new product to an existing vendor",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddingNewProduct"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has chosen a vendor",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.AddingAProductToExistingVendor.user_has_chosen_a_vendor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds a product to chosen existing vendor",
  "keyword": "When "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.AddingAProductToExistingVendor.user_adds_a_product_to_chosen_existing_vendor()"
});
formatter.result({
  "error_message": "java.lang.ClassCastException: java.lang.String cannot be cast to io.restassured.path.json.JsonPath\r\n\tat com.fruitShop.step_definitions.AddingAProductToExistingVendor.user_adds_a_product_to_chosen_existing_vendor(AddingAProductToExistingVendor.java:49)\r\n\tat ✽.user adds a product to chosen existing vendor(file:///C:/Users/hosha/IdeaProjects/FruitShopAPI/src/test/resources/features/gettingAllVendors.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see the added product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.AddingAProductToExistingVendor.user_should_see_the_added_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});