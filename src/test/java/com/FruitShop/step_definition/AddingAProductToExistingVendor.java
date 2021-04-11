package com.FruitShop.step_definition;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class AddingAProductToExistingVendor {

    @Given("user has chosen a vendor")
    public void user_has_chosen_a_vendor() {

        given()
                .log().all()
                .contentType(ContentType.JSON)
                .pathParam("id",501)
                .when()
                .get("Vendors/{id}")
                .then()
                .log().all()
                .statusCode(is(200))
                ;

    }

    @When("user adds a product to chosen existing vendor")
    public void user_adds_a_product_to_chosen_existing_vendor() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("user should see the added product")
    public void user_should_see_the_added_product() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
