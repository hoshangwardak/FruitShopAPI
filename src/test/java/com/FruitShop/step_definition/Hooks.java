package com.FruitShop.step_definition;

import io.restassured.RestAssured;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import static io.restassured.RestAssured.reset;

public class Hooks {

    @BeforeAll
    public static void fruitShopInitializer() {

        // https://api.predic8.de:443/shop/vendors/501

        RestAssured.baseURI = "https://api.predic8.de:443";
        RestAssured.basePath = "/shop/";
    }

    @AfterAll
    public static void cleanUpFruitShop() {
        reset();
    }
}
