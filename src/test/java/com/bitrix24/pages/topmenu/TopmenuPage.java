package com.bitrix24.pages.topmenu;

import com.bitrix24.utilities.BasePage;
import com.bitrix24.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TopmenuPage extends BasePage {
    public TopmenuPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(css = "button[id='blog-submit-button-save']")
    public WebElement sendKeyLocator;


}
