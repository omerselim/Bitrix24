package com.bitrix24.step_definitions;

import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class LoginStepDefinitions {
    Pages pages=new Pages();

    @Then("login as a {string}")
    public void userLogsInAsA(String role) {
        pages.loginPage().login(role);
    }

    @And("verify mainpage title.")
    public void verifyMainpageTitle() {
        String expected = pages.loginPage().mainpagetitle;
        Assert.assertEquals(expected,  pages.loginPage().getMainPageTitle());
    }

    @Then("verify {string} user name on the main page.")
    public void verifyUserNameOnMainPage(String role) {
        String expectedUsernameOnMainPage = pages.loginPage().expectedUsername(role);
        String actualUsernameOnMainPage = pages.loginPage().userNameOnMainPageElement.getText();
        Assert.assertEquals(expectedUsernameOnMainPage, actualUsernameOnMainPage);
    }

    @Then("user logs in with {string} username and {string} password")
    public void userLogsInWithUsernameAndPassword(String username, String password) {
        pages.loginPage().login(username, password);
    }

    @And("user verifies that warning message is displayed")
    public void userVerifiesThatWarningMessageIsDisplayed() {
        Assert.assertEquals(pages.loginPage().getActualErrorMessage(), pages.loginPage().getExpectedErrorMessage());
    }

    @Given("user logs in with following invalid credentials {string} and-or {string}.")
    public void userLogsInWithFollowingInvalidCredentialsAndOr(String username, String password) {
        pages.loginPage().login(username, password);
    }

    @Then("verify {string} on the main page.")
    public void verifyOnTheMainPage(String name) {
        Assert.assertEquals(name, pages.loginPage().userNameOnMainPageElement.getText());
    }

    @Given("user logs in with following {string} and {string}.")
    public void userLogsInWithFollowingAnd(String username, String password) {
        pages.loginPage().login(username, password);
    }

    @And("verify {string}.")
    public void verify(String mainPageTitle) {
        BrowserUtils.waitFor(2);
        Assert.assertEquals(mainPageTitle,  pages.loginPage().getMainPageTitle());
    }




}