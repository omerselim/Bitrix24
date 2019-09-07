package com.bitrix24.pages.sidemenu;

import com.bitrix24.utilities.BasePage;
import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.ConfigurationReader;
import com.bitrix24.utilities.Driver;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SidemenuPage extends BasePage {
    private static final Logger logger = LogManager.getLogger();

    public SidemenuPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(css = "xxxxxxx")
    private WebElement xxxxxxxxx;


    /**
     * This method will navigate user to the specific side menu on bitrix application.
     *
     * @param sidemenu
     */
    public void navigateSideMenu(String sidemenu) {
        String sidemenuLocator="//span[@class='menu-item-link-text'][contains(text(),'" + sidemenu + "')]";
        try {
            BrowserUtils.waitForClickablility(By.xpath(sidemenuLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
            WebElement tabElement=Driver.getDriver().findElement(By.xpath(sidemenuLocator));
            new Actions(Driver.getDriver()).moveToElement(tabElement).pause(200).doubleClick(tabElement).build().perform();
        } catch (Exception e) {
            logger.error("Failed to click on :: " + sidemenu);
            logger.error(e);
            BrowserUtils.clickWithWait(By.xpath(sidemenuLocator), Integer.parseInt(ConfigurationReader.getProperty("SHORT_WAIT")));
        }
    }


}
