package com.bitrix24.pages.login;

import com.bitrix24.utilities.*;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class LoginPage extends BasePage {
    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(name = "USER_LOGIN")
    @CacheLookup
    private WebElement userNameElement;

    @FindBy(name = "USER_PASSWORD")
    @CacheLookup
    private WebElement passwordElement;

    @FindBy(css = "input[class='login-btn']")
    private WebElement loginButtonElement;

    @FindBy(name = "USER_REMEMBER")
    private WebElement rememberMeElement;

    @FindBy(css = "a[class='login-link-forgot-pass']")
    public WebElement forgotPasswordElement;


    @FindBy(css = "div[class='errortext']")
    private WebElement errorMessageElement;
    private String errorMessage = "Incorrect login or password";

    @FindBy(css = "span[id='user-name']")
    public WebElement userNameOnMainPageElement;




    public void login(String username, String password) {
        userNameElement.sendKeys(username);
        passwordElement.sendKeys(password);
        loginButtonElement.click();
    }


    public void login(String role) {
        String username = "";
        String password = "";
        if (role.equalsIgnoreCase("hr")) {
            username = ConfigurationReader.getProperty("hrusername");
            password = ConfigurationReader.getProperty("password");
        } else if (role.equalsIgnoreCase("helpdesk")) {
            username = ConfigurationReader.getProperty("helpdeskusername");
            password = ConfigurationReader.getProperty("password");
        } else if (role.equalsIgnoreCase("marketing")) {
            username = ConfigurationReader.getProperty("marketingusername");
            password = ConfigurationReader.getProperty("password");
        }
        userNameElement.sendKeys(username);
        passwordElement.sendKeys(password);
        loginButtonElement.click();
    }

    public String expectedUsername(String role) {
        if (role.equalsIgnoreCase("hr")) {
            return ConfigurationReader.getProperty("hrusername");

        } else if (role.equalsIgnoreCase("helpdesk")) {
            return ConfigurationReader.getProperty("helpdeskusername");

        } else if (role.equalsIgnoreCase("marketing")) {
            return ConfigurationReader.getProperty("marketingusername");
        }
        return null;
    }

    public String getActualErrorMessage() {
        BrowserUtils.waitForVisibility(errorMessageElement,5);
        return errorMessageElement.getText();
    }

    public String getExpectedErrorMessage() {
        return errorMessage;
    }

    public void clickRememberMe() {
        BrowserUtils.waitForClickablility(rememberMeElement, Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        if (!rememberMeElement.isSelected()) {
            rememberMeElement.click();
        }
    }

    public String getUserNameOnMainPAge() {
        return errorMessage;
    }


    ExcelUtil excelutil = new ExcelUtil();
    public void LoginExcelCredential02(int row) throws IOException {
        String username = excelutil.getUserNameFromExcel(row);
        String password = excelutil.getPasswordFromExcel(row);
        login(username,password);
    }

    public void LoginExcelCredential01(int row) throws IOException {

        File src=new File("src\\test\\resources\\externalDataFiles\\BitrixData.xlsx");
        FileInputStream fis=new FileInputStream(src);
        XSSFWorkbook srcBook= new XSSFWorkbook(fis);
        XSSFSheet sourceSheet = srcBook.getSheetAt(1);

        XSSFRow sourceRow = sourceSheet.getRow(row);
        XSSFCell username=sourceRow.getCell(1);
        XSSFCell password=sourceRow.getCell(2);
        String userNameExcel = username.getStringCellValue();
        String passwordExcel = password.getStringCellValue();
        System.out.println("The username is" +userNameExcel);
        System.out.println("The password is" +passwordExcel);
        login(userNameExcel,passwordExcel);

//        log.info("The username on " +row + " is: "+userNameExcel);
//        log.info("The password on "+row+ " is: "+passwordExcel);
//        driver.findElement(txtbox_username).sendKeys(userNameExcel);
//        driver.findElement(txtbox_password).sendKeys(passwordExcel);
//        driver.findElement(btn_logon).click();


    }


}
