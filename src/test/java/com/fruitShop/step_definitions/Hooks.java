package com.fruitShop.step_definitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.restassured.RestAssured;

public class Hooks {

    @Before
    public static void fruitShopInitializer() {
        // https://api.predic8.de:443
        RestAssured.baseURI = "https://api.predic8.de";
        RestAssured.basePath = "/shop/";
    }

    @After
    public static void cleanUpFruitShop() {
       // reset();
    }

}
