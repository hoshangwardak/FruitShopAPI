package com.fruitShop.step_definitions;

import com.fruitShop.pojo.ProductPojo;
import com.fruitShop.utils.FruitShopUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class AddingAProductToExistingVendor {

    Map<String, String> addedProduct;
    String vendorName = "Prego";
    int chosenVendorId = 0;
    ProductPojo newProduct = new ProductPojo("Blue Mist",10.99);

    @Given("user has chosen a vendor")
    public void user_has_chosen_a_vendor() {
        chosenVendorId = FruitShopUtils.getVendorId(vendorName);
    }

    @When("user adds a product to chosen existing vendor")
    public void user_adds_a_product_to_chosen_existing_vendor() {

        JsonPath jp =
                 given()
                .pathParam("id",chosenVendorId)
                .contentType(ContentType.JSON)
                .body(newProduct)
        .when()
                .post("vendors/{id}/products/")

        .then()
                .extract()
                .jsonPath()
                ;

        // Storing the POST response into a Map
        // addedProduct = {name=Blue Mist, price=10.99, self_url=/shop/products/860, vendor_url=/shop/vendors/884}
    }

    @Then("user should see the added product")
    public void user_should_see_the_added_product() {


                given()
                        .log().all()
                        .pathParam("id",chosenVendorId)
                .when()
                        .get("/vendors/{id}/products/")
                .then()
                        .statusCode(is(equalTo(200)))
                        .body("products[2].name",is(newProduct.getName()))
                        .body("products[2].product_url",is(addedProduct.get("self_url")))
                        ;
    }
}
