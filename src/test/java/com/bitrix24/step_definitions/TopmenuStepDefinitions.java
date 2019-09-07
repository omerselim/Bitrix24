package com.bitrix24.step_definitions;

import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class TopmenuStepDefinitions {
    Pages pages=new Pages();


    @Then("verify the text of the {string}")
    public void verifyTheTextOfThe(String text) {
        BrowserUtils.waitFor(1);
        String actualText = pages.topmenuPage().sendKeyLocator.getText();
        Assert.assertEquals(text.toUpperCase(), actualText.toUpperCase());
    }

    @And("navigates to tab {string}")
    public void navigatesToTab(String topMenu) {
        pages.topmenuPage().navigateTopMenu(topMenu);
    }

}