package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


import org.testng.Assert;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;


public class APITEST {

    private RequestSpecification request;
    private Response response;

 /*   @Given("use endpoint posts")
    public void use_endpoint_posts() {
      
        given().when().get("https://www.colourlovers.com/api/patterns?format=json").then().log()
        .all();
    }*/
    final static String url="https://www.colourlovers.com/api/patterns?format=json";
    @Before
    public void setTheBaseURL() {
        RestAssured.baseURI = "http://www.colourlovers.com/api/patterns";
    }    
    
    
    @Given("Color Lover Patterns API endpoint exists")
    public void Color_Lover_Patterns_API_endpoint_exists() {
   
        request = RestAssured.given().
                header("User-Agent", "PostmanRuntime/7.28.4");
    }

    @When("I send a valid Get Request to Get Patterns API XML File")
    public void I_send_a_valid_Get_Request_to_Get_Patterns_API_XML_File() {
        response = request.get();
    }

    @Then("^response status code should be 200$")
    public void response_status_code_should_be() {
    	 System.out.println("StatusCode : "+response.getStatusCode());
    	 int code =200;
        Assert.assertEquals(response.getStatusCode(), code);
    }

    @And("^I should see the Number of Views of Pattern \"([^\"]*)\" Greater Than \"([^\"]*)\"$")
    public void I_should_see_the_Number_of_Views_of_Pattern(String patternNum, String threshold) {
    	 System.out.println(response.then().extract().path("patterns.pattern[" + patternNum + "].numViews").toString());
        assertThat(response.then().extract().path("patterns.pattern[" + patternNum + "].numViews").toString(),
                greaterThan(threshold));
       
    }
   
}