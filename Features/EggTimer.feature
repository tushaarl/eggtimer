Feature: Countdown Timer
@testtimmer
Scenario: Validate Egg timer countdown
    Given User Launch browser
    When Start Timmer Box Display
    Then Enter Timmer Value 
    And Click on Start button
    Then Validate the timer
    And Close Browser