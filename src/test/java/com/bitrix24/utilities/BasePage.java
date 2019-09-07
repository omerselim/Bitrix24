package com.bitrix24.utilities;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {
    //we don't want to access these variables outside
    private static final Logger logger = LogManager.getLogger();


    @FindBy(css = "span[id='pagetitle']")
    protected WebElement pageTitle;

    @FindBy(css = "span[class='logo-text']")
    protected WebElement mainpageTitle;
    public String mainpagetitle = "NextbaseCRM";




    public BasePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    /**
     * @return page name, for example: Dashboard
     */
    public String getMainPageTitle() {
        //ant time we are verifying page name, or page subtitle, loader mask appears
//        waitUntilLoaderScreenDisappear();
        BrowserUtils.waitForStaleElement(mainpageTitle);
        return mainpageTitle.getText();
    }

    /**
     * @return page name, for example: Dashboard
     */
    public String getPageTitle() {
        //ant time we are verifying page name, or page subtitle, loader mask appears
//        waitUntilLoaderScreenDisappear();
        BrowserUtils.waitForStaleElement(pageTitle);
        return pageTitle.getText();
    }


//    /**
//     * @return page name, for example: Dashboard
//     */
//    public String getPageSubTitle() {
//        //ant time we are verifying page name, or page subtitle, loader mask appears
//        waitUntilLoaderScreenDisappear();
//        BrowserUtils.waitForStaleElement(pageSubTitle);
//        return pageSubTitle.getText();
//    }




    /**
     * Waits until loader screen present. If loader screen will not pop up at all,
     * NoSuchElementException will be handled  bu try/catch block
     * Thus, we can continue in any case.
     */
//    public void waitUntilLoaderScreenDisappear() {
//        try {
//            WebDriverWait wait = new WebDriverWait(Driver.getDriver(), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
//            wait.until(ExpectedConditions.invisibilityOf(loaderMask));
//        } catch (Exception e) {
//            logger.error("Loader mask doesn't present.");
//            System.out.println("Loader mask doesn't present.");
//        }
//    }

    /**
     * This method will navigate user to the specific module in vytrack application.
     * For example: if tab is equals to Activities, and module equals to Calls,
     * Then method will navigate user to this page: http://qa2.vytrack.com/call/
     *
     * @param tab
     */
    public void navigateTopMenu(String tab) {
        String tabLocator = "//span[text()='"+tab+"']";
         try {
            BrowserUtils.waitForClickablility(By.xpath(tabLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
//            Driver.getDriver().findElement(By.xpath(tabLocator)).click();
            WebElement tabElement = Driver.getDriver().findElement(By.xpath(tabLocator));
            new Actions(Driver.getDriver()).moveToElement(tabElement).pause(200).doubleClick(tabElement).build().perform();
        } catch (Exception e) {
            logger.error("Failed to click on :: "+tab);
            logger.error(e);
            BrowserUtils.clickWithWait(By.xpath(tabLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        }

    }

    /**
     * This method will navigate user to the specific module in vytrack application.
     * For example: if tab is equals to Activities, and module equals to Calls,
     * Then method will navigate user to this page: http://qa2.vytrack.com/call/
     *
     * @param module
     */
    public void navigateModuleMore(String module) {
        module = module.toLowerCase().trim();
        int num=1;
        switch("module"){
            case "file": num = 1; break;
            case "appreciation": num = 2; break;
            case "announcement": num = 3; break;
            case "workflow": num = 4; break;
            default: System.out.println("Incorrect tab name");
        }
        String MoreLocator = "//span[@id='feed-add-post-form-link-more']";
        String moduleLocator = "span[class^='menu-popup-item menu']:nth-of-type("+num+")";
        try {
            BrowserUtils.waitForClickablility(By.xpath(MoreLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            WebElement tabElement = Driver.getDriver().findElement(By.xpath(MoreLocator));
            new Actions(Driver.getDriver()).moveToElement(tabElement).pause(200).doubleClick(tabElement).build().perform();
        } catch (Exception e) {
            logger.error("Failed to click on :: More");
            logger.error(e);
            BrowserUtils.clickWithWait(By.xpath(MoreLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        }
        try {
            BrowserUtils.waitForPresenceOfElement(By.cssSelector(moduleLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            BrowserUtils.waitForVisibility(By.cssSelector(moduleLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            BrowserUtils.scrollToElement(Driver.getDriver().findElement(By.cssSelector(moduleLocator)));
            Driver.getDriver().findElement(By.cssSelector(moduleLocator)).click();
        } catch (Exception e) {
            logger.error("Failed to click on :: "+module);
            logger.error(e);
            BrowserUtils.waitForStaleElement(Driver.getDriver().findElement(By.cssSelector(moduleLocator)));
            BrowserUtils.clickWithTimeOut(Driver.getDriver().findElement(By.cssSelector(moduleLocator)),  Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        }
    }

    /**
     * This method will navigate user to the specific module in vytrack application.
     * For example: if tab is equals to Activities, and module equals to Calls,
     * Then method will navigate user to this page: http://qa2.vytrack.com/call/
     *
     * @param WorkflowOptions
     */
    public void navigateModuleWorkflow(String WorkflowOptions) {
        String MoreLocator = "//span[@id='feed-add-post-form-link-more']";
        String WorkflowLocator = "span[class^='menu-popup-item menu']:nth-of-type(4)";
        String WorkflowOptionsLocator = "span[class^='menu-popup-item menu']:nth-of-type(4)";
        try {
            BrowserUtils.waitForClickablility(By.xpath(MoreLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            WebElement tabElement = Driver.getDriver().findElement(By.xpath(MoreLocator));
            new Actions(Driver.getDriver()).moveToElement(tabElement).pause(200).doubleClick(tabElement).build().perform();
        } catch (Exception e) {
            logger.error("Failed to click on :: More");
            logger.error(e);
            BrowserUtils.clickWithWait(By.xpath(MoreLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        }
        try {
            BrowserUtils.waitForClickablility(By.cssSelector(WorkflowLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            WebElement tabElement = Driver.getDriver().findElement(By.cssSelector(WorkflowLocator));
            new Actions(Driver.getDriver()).moveToElement(tabElement).pause(200).doubleClick(tabElement).build().perform();
        } catch (Exception e) {
            logger.error("Failed to click on :: Workflow");
            logger.error(e);
            BrowserUtils.clickWithWait(By.cssSelector(WorkflowLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        }
        try {
            BrowserUtils.waitForPresenceOfElement(By.xpath(WorkflowOptionsLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            BrowserUtils.waitForVisibility(By.xpath(WorkflowOptionsLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            BrowserUtils.scrollToElement(Driver.getDriver().findElement(By.xpath(WorkflowOptionsLocator)));
            Driver.getDriver().findElement(By.xpath(WorkflowOptionsLocator)).click();
        } catch (Exception e) {
            logger.error("Failed to click on :: "+WorkflowOptions);
            logger.error(e);
            BrowserUtils.waitForStaleElement(Driver.getDriver().findElement(By.xpath(WorkflowOptionsLocator)));
            BrowserUtils.clickWithTimeOut(Driver.getDriver().findElement(By.xpath(WorkflowOptionsLocator)),  Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        }
    }


    public void goToLandingPage(){
        Driver.getDriver().get(ConfigurationReader.getProperty("url" + ConfigurationReader.getProperty("environment")));
    }
}
