package sTEPDEfinatioN;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Register_CardTest {
	
	public static WebDriver driver;
	
	
	@Given("^Open evenity site$")
	public void open_evenity_site() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\ubox0\\Desktop\\Driver(Chrome+Mozilla+ internet)\\Chrome\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		
	   driver.get("https://evenity-qa.crxcopay.com");
	}

	@Given("^click on patient$")
	public void click_on_patient() throws Throwable {
		
		//Alert alert = driver.switchTo().alert();
		
		//String alertMessage = driver.switchTo().alert().getText();
		
		//System.out.println(alertMessage);
		
		
		
		Alert alert = driver.switchTo().alert();
		 System.out.println(alert.getText());
		 
		 
		//alert.dismiss();
	
		 driver.findElement(By.xpath("//a[text()=' Decline ']")).click();
		
		
		
		
		
	   
	}

	@Given("^click on register from dropdown menu$")
	public void click_on_register_from_dropdown_menu() throws Throwable {
	  
	}

	@Given("^click on Register Your Card button$")
	public void click_on_Register_Your_Card_button() throws Throwable {
	    
	}

	@When("^I complete Eligibility qn$")
	public void i_complete_Eligibility_qn() throws Throwable {
	   
	}

	@Then("^Enter Patient Information$")
	public void enter_Patient_Information() throws Throwable {
	  
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	  
	}


}
