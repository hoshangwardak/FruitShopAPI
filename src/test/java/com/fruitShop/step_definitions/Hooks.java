package com.fruitShop.step_definitions;

import com.fruitShop.utils.ConfigurationReader;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.restassured.RestAssured;

import static io.restassured.RestAssured.reset;

public class Hooks {

    @Before
    public static void fruitShopInitializer() {
        RestAssured.baseURI = ConfigurationReader.getProperty("baseUri");
        RestAssured.basePath = ConfigurationReader.getProperty("basePath");
    }

    @After
    public static void cleanUpFruitShop() {
        reset();
    }

}
