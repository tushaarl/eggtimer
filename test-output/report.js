$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Buy.feature");
formatter.feature({
  "line": 1,
  "name": "Buy Product",
  "description": "",
  "id": "buy-product",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Buy Samsung m31 mobile phone",
  "description": "",
  "id": "buy-product;buy-samsung-m31-mobile-phone",
  "type": "scenario",
  "keyword": "Scenario"
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
formatter.step({
  "line": 12,
  "name": "validate logged in user",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enter value to Searchbox as \"Samsung m31 mobile phone\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Click on Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Page Title should be \"Amazon.in : Samsung m31 mobile phone\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Click on Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User on new window with title should be \"Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage): Amazon.in: Electronics\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Click on Buy now button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Page Title should be \"Select a Payment Method - Amazon.in Checkout\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_browser()"
});
formatter.result({
  "duration": 8063561590,
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
  "duration": 1144789440,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_Signin_button()"
});
formatter.result({
  "duration": 1025988650,
  "status": "passed"
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
  "duration": 498762736,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_login_userid()"
});
formatter.result({
  "duration": 199476356,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_Continue()"
});
formatter.result({
  "duration": 1721315298,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_password()"
});
formatter.result({
  "duration": 206712749,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_login()"
});
formatter.result({
  "duration": 3203923957,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validate_logged_in_user()"
});
formatter.result({
  "duration": 293287984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung m31 mobile phone",
      "offset": 34
    }
  ],
  "location": "Steps.user_enter_value_to_Searchbox_as(String)"
});
formatter.result({
  "duration": 582961193,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_Search_button()"
});
formatter.result({
  "duration": 2360948209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.in : Samsung m31 mobile phone",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 593500052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31",
      "offset": 30
    },
    {
      "val": "6",
      "offset": 46
    },
    {
      "val": "128",
      "offset": 55
    }
  ],
  "location": "Steps.user_Click_on_Samsung_Galaxy_M_Ocean_Blue_GB_RAM_GB_Storage(int,int,int)"
});
formatter.result({
  "duration": 289541247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage): Amazon.in: Electronics",
      "offset": 41
    }
  ],
  "location": "Steps.user_on_new_window_with_title_should_be(String)"
});
formatter.result({
  "duration": 10242378597,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_on_Buy_now_button()"
});
formatter.result({
  "duration": 27596240458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select a Payment Method - Amazon.in Checkout",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 59128651,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP\u0027, ip: \u0027192.168.1.205\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Sonal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58943}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 59d729bb27000ab3812434fa74d23953\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat pageObjectpackage.HomePage.verifyHomePageTitle(HomePage.java:79)\r\n\tat stepdefinitions.Steps.page_Title_should_be(Steps.java:31)\r\n\tat ✽.Then Page Title should be \"Select a Payment Method - Amazon.in Checkout\"(./Features/Buy.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});