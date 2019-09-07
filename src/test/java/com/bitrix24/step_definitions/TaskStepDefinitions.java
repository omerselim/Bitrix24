package com.bitrix24.step_definitions;

import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.Driver;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;


public class TaskStepDefinitions {
    private Pages pages=new Pages();
    private String newTask = BrowserUtils.randomName(7);

    @Then("Click on New Task button")
    public void click_on_New_Task_button() {
        pages.taskPage().newTaskButtonLocator.click();
//      WebElement iframe = Driver.getDriver().findElement(By.cssSelector("iframe[id^='iframe_']"));
        Driver.getDriver().switchTo().frame(pages.taskPage().iframeElement);
        BrowserUtils.waitForClickablility(pages.taskPage().thingsToDoLocator,5);
    }

    @When("Fill out the Things to do box")
    public void fill_out_the_Things_to_do_box() {
        pages.taskPage().thingsToDoLocator.sendKeys(newTask);

    }

    @Then("Click on Add Task")
    public void click_on_Add_Task() {
        pages.taskPage().addTaskLocator.click();
    }

    @And("verify the new task is on the list")
    public void verifyTheNewTaskIsOnTheList() {
        List<WebElement> eventNames=new ArrayList<>();
        eventNames=Driver.getDriver().findElements(By.cssSelector("table[id='TASKS_GRID_ROLE_ID_4096_0_ADVANCED_N_table'] tbody td:nth-of-type(3)"));
        for (WebElement s: eventNames) {
            System.out.println(s);
        }

        for (WebElement s: eventNames) {
            if (newTask.equalsIgnoreCase(String.valueOf(s))) {
                System.out.println("new event \""+newTask+"\" has been created");
            } else {
                System.out.println("new event is not been able to created");
            }
        }
    }



    @And("Click on Upload icon")
    public void clickOnUploadIcon() {
        pages.taskPage().uploadIconLocator.click();
        BrowserUtils.waitPlease(1);
    }

    @Then("Upload a file from the computer")
    public void choose_a_file_or_image_from_the_computer() throws IOException {

        String filepath = "C:/Users/ostur/Pictures/Saved Pictures/tester.jpg";
        pages.taskPage().uploadFileOrImageLocator.sendKeys("C:/Users/ostur/Pictures/Saved Pictures/tester.jpg");

    }


    @Then("Click on the Deadline box")
    public void clickOnTheDeadlineBox() {
        pages.taskPage().deadlineBoxLocator.click();
    }

    @And("Select a future date")
    public void selectAFutureDate() throws ParseException {
        pages.taskPage().rightArrowLocator.click(); BrowserUtils.waitFor(1);
        pages.taskPage().firstMonday.click();       BrowserUtils.waitFor(3);
        pages.taskPage().selectButton.click();      BrowserUtils.waitFor(4);


    }

//    @And("Select a future date")
//    public void selectAFutureDate() throws ParseException {
//        String setDateStr = "08/28/2019";
//        String currentDateStr = pages.taskPage().currentYearLocator.getText()+"/"+
//                pages.taskPage().currentMonthLocator.getText()+"/"+
//                pages.taskPage().currentDayLocator.getText();
//
//        Date setDate = new SimpleDateFormat("MM/dd/yyyy").parse(setDateStr);
//        Date currentDate = new SimpleDateFormat("yyyy/MM/dd").parse(currentDateStr);
//
////        LocalDate localDate = LocalDate.of(2019, 8, 21);
////        localDate.plusWeeks(1);
//    }


}