package com.bitrix24.pages.task;

import com.bitrix24.utilities.BasePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TaskPage extends BasePage {

    @FindBy(className = "ui-btn-main")
    public WebElement newTaskButtonLocator;

    @FindBy(css= "div[class='task-info-panel-title'] input[placeholder='Things to do']")
    public WebElement thingsToDoLocator;

    @FindBy(css=("iframe[id^='iframe_']"))
    public WebElement iframeElement;

    @FindBy(css = "span[data-bx-id='task-edit-cmd']")
    public WebElement addTaskLocator;


    @FindBy(css = "#bx-b-uploadfile-task-form-bitrix_tasks_task_default_1")
    public WebElement uploadIconLocator;

//    @FindBy(css="div[class='diskuf-uploader']")    // !!!! NOT WORK -- upload locator should have input tag
//    @FindBy(css= "td[class='diskuf-selector wd-fa-add-file-light-cell wd-fa-add-file-from-main']")  // !!!! NOT WORK -- upload locator should have input tag
    @FindBy(css="input[type='file']")
    public WebElement uploadFileOrImageLocator;

    @FindBy(css="span[data-bx-id='dateplanmanager-deadline']>input:nth-of-type(1)")
    public WebElement deadlineBoxLocator;

    @FindBy(css="a[class='bx-calendar-top-month']")
    public WebElement currentMonthLocator;

    @FindBy(css="a[class='bx-calendar-top-year']")
    public WebElement currentYearLocator;

    @FindBy(css="a[class='bx-calendar-cell bx-calendar-active']")
    public WebElement currentDayLocator;

    @FindBy(css="a[class='bx-calendar-right-arrow']")
    public WebElement rightArrowLocator;

    @FindBy(xpath="//html[1]//div[1]/div[2]/a[2]")
    public WebElement firstMonday;

    @FindBy(xpath="//html[1]//div[1]/div[2]/a[2]")
    public WebElement selectButton;
}
