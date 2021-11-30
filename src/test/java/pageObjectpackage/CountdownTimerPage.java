package pageObjectpackage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import utilitypackage.TestBase;


public class CountdownTimerPage extends TestBase {
	
	
	  public CountdownTimerPage(WebDriver rdriver) { 
	  driver=rdriver;
	  PageFactory.initElements(rdriver, this);
	  
	  }
	
	@FindBy(id="EggTimer-start-time-input-text")
	WebElement starttimeinput;
	@FindBy(xpath="//*[@id=\\\"root\\\"]/div/div/div[2]/main/div[1]/button")
	WebElement startbutton;
	
		public boolean verifyenterSeconds()
		{
			return starttimeinput.isDisplayed();
		}
	
		public void closeBrowser()
		{
		driver.quit();
		}
	public void enterSeconds()
	{
		starttimeinput.sendKeys("25");
	}
	public void clickStart()
	{
		startbutton.click();
	}
	
	public void validateTimmer()
	{
		try {
		for(int i=0;i<=25;i++)
		{
		String x= driver.getTitle();
		System.out.println(x);
		int z=25-i;
		if(z<10)
		{
			String y="0"+Integer.toString(z);
			String expected="00:00:"+y;
			Assert.assertEquals(x, expected);
			Thread.sleep(1000);
		}else {
		String y=Integer.toString(z);
		String expected="00:00:"+y;
		Assert.assertEquals(x, expected);
		Thread.sleep(1000);
		}
		}
	}catch (Exception e) {
		System.out.println("======"+e);
	}
	
	}
}
