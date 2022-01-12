$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APITEST.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:en"
    }
  ],
  "line": 2,
  "name": "Getting The Number of the patterns views from",
  "description": "the Colorlover API XML Response and validate it it Greater than 4000",
  "id": "getting-the-number-of-the-patterns-views-from",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET the Number of the patterns view",
  "description": "",
  "id": "getting-the-number-of-the-patterns-views-from;get-the-number-of-the-patterns-view",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Color Lover Patterns API endpoint exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I send a valid Get Request to Get Patterns API XML File",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the Number of Views of Pattern \"\u003cpatternNumber\u003e\" Greater Than \"\u003cthreshold\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "getting-the-number-of-the-patterns-views-from;get-the-number-of-the-patterns-view;",
  "rows": [
    {
      "cells": [
        "patternNumber",
        "threshold"
      ],
      "line": 12,
      "id": "getting-the-number-of-the-patterns-views-from;get-the-number-of-the-patterns-view;;1"
    },
    {
      "cells": [
        "1",
        "4000"
      ],
      "line": 13,
      "id": "getting-the-number-of-the-patterns-views-from;get-the-number-of-the-patterns-view;;2"
    },
    {
      "cells": [
        "2",
        "4000"
      ],
      "line": 14,
      "id": "getting-the-number-of-the-patterns-views-from;get-the-number-of-the-patterns-view;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 525073000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "GET the Number of the patterns view",
  "description": "",
  "id": "getting-the-number-of-the-patterns-views-from;get-the-number-of-the-patterns-view;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Color Lover Patterns API endpoint exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I send a valid Get Request to Get Patterns API XML File",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the Number of Views of Pattern \"1\" Greater Than \"4000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "APITEST.Color_Lover_Patterns_API_endpoint_exists()"
});
formatter.result({
  "duration": 330798900,
  "status": "passed"
});
formatter.match({
  "location": "APITEST.I_send_a_valid_Get_Request_to_Get_Patterns_API_XML_File()"
});
formatter.result({
  "duration": 2317542000,
  "status": "passed"
});
formatter.match({
  "location": "APITEST.response_status_code_should_be()"
});
formatter.result({
  "duration": 2518600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 45
    },
    {
      "val": "4000",
      "offset": 62
    }
  ],
  "location": "APITEST.I_should_see_the_Number_of_Views_of_Pattern(String,String)"
});
formatter.result({
  "duration": 2402703900,
  "status": "passed"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET the Number of the patterns view",
  "description": "",
  "id": "getting-the-number-of-the-patterns-views-from;get-the-number-of-the-patterns-view;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Color Lover Patterns API endpoint exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I send a valid Get Request to Get Patterns API XML File",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "response status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the Number of Views of Pattern \"2\" Greater Than \"4000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "APITEST.Color_Lover_Patterns_API_endpoint_exists()"
});
formatter.result({
  "duration": 705700,
  "status": "passed"
});
formatter.match({
  "location": "APITEST.I_send_a_valid_Get_Request_to_Get_Patterns_API_XML_File()"
});
formatter.result({
  "duration": 244473500,
  "status": "passed"
});
formatter.match({
  "location": "APITEST.response_status_code_should_be()"
});
formatter.result({
  "duration": 147000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    },
    {
      "val": "4000",
      "offset": 62
    }
  ],
  "location": "APITEST.I_should_see_the_Number_of_Views_of_Pattern(String,String)"
});
formatter.result({
  "duration": 47531800,
  "status": "passed"
});
});