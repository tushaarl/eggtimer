package stepdefinitions;
import org.testng.Assert;

import cucumber.api.java.en.*;
import pageObjectpackage.CountdownTimerPage;
import utilitypackage.TestBase;


public class Steps extends TestBase {
	
	CountdownTimerPage cp;
	
	@Given("^User Launch browser$")
	public void user_launch_browser() throws Throwable {
		logger.info("******User Launch browser *******");
		initialization();
		Thread.sleep(2000);
	}
	@When("^Start Timmer Box Display$")
	public void start_Timmer_Box_Display() throws Throwable {
	    cp.verifyenterSeconds();
	    Assert.assertEquals(cp.verifyenterSeconds(), true);
	}
	
	@Then("^Enter Timmer Value$")
	public void enter_Timmer_Value() throws Throwable {
	   cp.enterSeconds();
	}

	@Then("^Click on Start button$")
	public void click_on_start_button() {
		logger.info("******User Click on Start button to start timmer *******");
		cp.clickStart();
    
	}

	@Then("^Validate the timer$")
	public void validate_the_timer() {
		logger.info("******User validate the timmer *******");
	    cp.validateTimmer();
	  
	}

	@Then("^Close Browser$")
	public void close_browser() throws Throwable {
		logger.info("******User Close Browser*******");
		Thread.sleep(2000);
	    cp.closeBrowser();
	}


}
