$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EggTimer.feature");
formatter.feature({
  "line": 1,
  "name": "Countdown Timer",
  "description": "",
  "id": "countdown-timer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Egg timer countdown",
  "description": "",
  "id": "countdown-timer;validate-egg-timer-countdown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@testtimmer"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User Launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Start Timmer Box Display",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter Timmer Value",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Start button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validate the timer",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_browser()"
});
formatter.result({
  "duration": 11597504500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.start_Timmer_Box_Display()"
});
formatter.result({
  "duration": 1430600,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefinitions.Steps.start_Timmer_Box_Display(Steps.java:21)\r\n\tat ✽.When Start Timmer Box Display(EggTimer.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.enter_Timmer_Value()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_start_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.validate_the_timer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});