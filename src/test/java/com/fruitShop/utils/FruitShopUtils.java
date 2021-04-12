package com.fruitShop.utils;

import io.cucumber.java.it.Ma;
import io.restassured.path.json.JsonPath;
import net.bytebuddy.description.field.FieldDescription;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import com.fruitShop.pojo.ProductPojo;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import org.junit.jupiter.api.TestInstance;

import java.util.*;

import static io.restassured.RestAssured.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class FruitShopUtils {

    @Test
    public void test() {

    }




    @DisplayName("Get Vendor ID")
    public static int getVendorId(String vendorName) {

        // These 4 line belong to connection
        String baseUri = ConfigurationReader.getProperty("baseUri");
        String basePath = ConfigurationReader.getProperty("basePath");
        String vendorsResource = ConfigurationReader.getProperty("vendorsResource");
        String endPoint = baseUri + basePath + vendorsResource;

        // These are my variables
        JsonPath jp;
        List<String> allVendorsName = new ArrayList<>();
        List<String> allVendorsUrl = new ArrayList<>();
        List<Integer> allVendorsId = new ArrayList<>();
        Map<String,Integer> allVendorsNameAndIds = new LinkedHashMap<>();
        int id = 0;

        // This is to get the response
        jp = get(endPoint).jsonPath();

        // This is to get the total count of vendors
        int count = jp.getInt("meta.count");

        // This is to get the limit of vendors per page
        int limit = jp.getInt("meta.limit");

        // Total calculation
        int total = (count % limit) == 0 ? (count / limit) : (count / limit) + 1;

        // Here I am looping through each page of the resource by dividing the total number
        // of vendors to limit which is 10 per page so our total is 6.
        for (int page = 1; page <= total; page++) {
            jp = get(endPoint + "?page=" + page).jsonPath();
            allVendorsName.addAll(jp.getList("vendors.name"));
            allVendorsUrl.addAll(jp.getList("vendors.vendor_url"));
        }

        // Here I am looping to extract the id from each vendor's url
        for (String eachVendorUrl : allVendorsUrl) {
            allVendorsId.add(Integer.parseInt(eachVendorUrl.substring(eachVendorUrl.lastIndexOf("/")+1)));
        }

        // Here I am adding each vendor's name and id as Map, Total should be 27!
        for (int i=0; i<allVendorsName.size(); i++) {
            allVendorsNameAndIds.put(allVendorsName.get(i),allVendorsId.get(i));
        }

        // Here I am looping through each keySet to find the match for the name and then
        // extract the id of that matching name and assign it to the id integer.
        for (String each : allVendorsNameAndIds.keySet()) {
            if (each.contains(vendorName)) {
                id = allVendorsNameAndIds.get(each);
            }
        }

        return id;
    }

    @DisplayName("Get Product ID")
    public static int getProductId(String productName) {

        // These 4 line belong to connection
        String baseUri = ConfigurationReader.getProperty("baseUri");
        String basePath = ConfigurationReader.getProperty("basePath");
        String vendorsResource = ConfigurationReader.getProperty("productsResource");
        String endPoint = baseUri + basePath + vendorsResource;

        // These are my variables
        JsonPath jp;
        List<String> allProductNames = new ArrayList<>();
        List<String> allProductsUrls = new ArrayList<>();
        List<Integer> allProductIds = new ArrayList<>();
        Map<String,Integer> allProductNamesAndIds = new LinkedHashMap<>();
        int id = 0;

        // This is to get the response
        jp = get(endPoint).jsonPath();

        // This is to get the total count of products
        int count = jp.getInt("meta.count");

        // This is to get the limit of products per page
        int limit = jp.getInt("meta.limit");

        // Total calculation
        int total = (count % limit) == 0 ? (count / limit) : (count / limit) + 1;

        // Here I am looping through each page of the resource by dividing the total number
        // of products to limit which is 10 per page so our total is 6.
        for (int page = 1; page <= total; page++) {
            jp = get(endPoint + "?page=" + page).jsonPath();
            allProductNames.addAll(jp.getList("products.name"));
            allProductsUrls.addAll(jp.getList("products.product_url"));
        }

        // Here I am looping to extract the id from each product's url
        for (String eachProductUrl : allProductsUrls) {
            allProductIds.add(Integer.parseInt(eachProductUrl.substring(eachProductUrl.lastIndexOf("/")+1)));
        }

        // Here I am adding each product's name and id as Map, Total should be 27!
        for (int i=0; i<allProductNames.size(); i++) {
            allProductNamesAndIds.put(allProductNames.get(i),allProductIds.get(i));
        }

        // Here I am looping through each keySet to find the match for the name and then
        // extract the id of that matching name and assign it to the id integer.
        for (String each : allProductNamesAndIds.keySet()) {
            if (each.contains(productName)) {
                id = allProductNamesAndIds.get(each);
            }
        }

        return id;
    }

}


