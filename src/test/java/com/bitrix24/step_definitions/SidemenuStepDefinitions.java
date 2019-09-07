package com.bitrix24.step_definitions;

import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class SidemenuStepDefinitions {
    Pages pages=new Pages();


    @And("navigates to sidebar {string}")
    public void navigatesToSide(String menu) {
        pages.sidemenuPage().navigateSideMenu(menu);
        BrowserUtils.waitFor(2);
    }


    @Then("verify the page title {string}")
    public void verifyThePageTitle(String title) {
        Assert.assertEquals(title, pages.sidemenuPage().getPageTitle());
    }
}