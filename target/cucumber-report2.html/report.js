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
  "status": "passed"
});
formatter.step({
  "name": "user should see the added product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fruitShop.step_definitions.AddingAProductToExistingVendor.user_should_see_the_added_product()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path products[2].product_url doesn\u0027t match.\nExpected: is \"/shop/products/866\"\n  Actual: /shop/products/860\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat com.fruitShop.step_definitions.AddingAProductToExistingVendor.user_should_see_the_added_product(AddingAProductToExistingVendor.java:62)\r\n\tat ✽.user should see the added product(file:///C:/Users/hosha/IdeaProjects/FruitShopAPI/src/test/resources/features/gettingAllVendors.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});