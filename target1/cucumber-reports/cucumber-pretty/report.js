$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Mobile.feature");
formatter.feature({
  "line": 1,
  "name": "Browse Mobile and Filter Price",
  "description": "",
  "id": "browse-mobile-and-filter-price",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Below are common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Click on Signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters valid login userid",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "duration": 4975726600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 89089900,
  "error_message": "java.lang.AssertionError: expected [Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in] but found [e.ggtimer - a simple countdown timer]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepdefinitions.Steps.page_Title_should_be(Steps.java:44)\r\n\tat ✽.Then Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"(Mobile.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_Click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_login_userid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Browse Mobile Phones",
  "description": "",
  "id": "browse-mobile-and-filter-price;browse-mobile-phones",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User Click on Mobile Link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Page Title should be \"Mobile Phones: Buy New Mobiles Online at Best Prices in India | Buy Cell Phones Online - Amazon.in\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Click on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Click_on_Mobile_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phones: Buy New Mobiles Online at Best Prices in India | Buy Cell Phones Online - Amazon.in",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Below are common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Click on Signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters valid login userid",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "duration": 4637154700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 45566500,
  "error_message": "java.lang.AssertionError: expected [Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in] but found [e.ggtimer - a simple countdown timer]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepdefinitions.Steps.page_Title_should_be(Steps.java:44)\r\n\tat ✽.Then Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"(Mobile.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_Click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_login_userid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Select Samsung Mobile Phones",
  "description": "",
  "id": "browse-mobile-and-filter-price;select-samsung-mobile-phones",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User Click on Mobile Link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Select Samsung brand",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User Get Result as \"Samsung\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User Click on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Click_on_Mobile_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Select_Samsung_brand()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 20
    }
  ],
  "location": "Steps.user_Get_Result_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Below are common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Click on Signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters valid login userid",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "duration": 4487960700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 50202500,
  "error_message": "java.lang.AssertionError: expected [Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in] but found [e.ggtimer - a simple countdown timer]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepdefinitions.Steps.page_Title_should_be(Steps.java:44)\r\n\tat ✽.Then Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"(Mobile.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_Click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_login_userid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Filter price for Samsung Mobile Phones Under Thausand",
  "description": "",
  "id": "browse-mobile-and-filter-price;filter-price-for-samsung-mobile-phones-under-thausand",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User Click on Mobile Link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Select Samsung brand",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User Select Price Under 1000",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Get Filter Result as \"Under ₹1,000\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Click on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Click_on_Mobile_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Select_Samsung_brand()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "Steps.user_Select_Price_Under(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Under ₹1,000",
      "offset": 27
    }
  ],
  "location": "Steps.user_Get_Filter_Result_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Below are common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Click on Signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters valid login userid",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "duration": 4821349800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 43124300,
  "error_message": "java.lang.AssertionError: expected [Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in] but found [e.ggtimer - a simple countdown timer]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepdefinitions.Steps.page_Title_should_be(Steps.java:44)\r\n\tat ✽.Then Page Title should be \"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"(Mobile.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_Click_on_Signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_login_userid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 55,
  "name": "Filter samsung phone having four rating",
  "description": "",
  "id": "browse-mobile-and-filter-price;filter-samsung-phone-having-four-rating",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "User Click on Mobile Link",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User enter value to Searchbox as \"samsung mobile phones\"",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User Click on Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Get all mobile phones having four rating add details in excle",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User Click on Logout",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Page Title should be \"Amazon Sign In\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Click_on_Mobile_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "samsung mobile phones",
      "offset": 34
    }
  ],
  "location": "Steps.user_enter_value_to_Searchbox_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.get_all_mobile_phones_having_four_rating_add_details_in_excle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_Click_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon Sign In",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});