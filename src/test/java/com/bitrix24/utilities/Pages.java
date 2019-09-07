package com.bitrix24.utilities;


import com.bitrix24.pages.login.LoginPage;
import com.bitrix24.pages.sidemenu.SidemenuPage;
import com.bitrix24.pages.task.TaskPage;
import com.bitrix24.pages.topmenu.TopmenuPage;

public class Pages {
    private LoginPage loginPage;
    private TopmenuPage topmenuPage;
    private SidemenuPage sidemenuPage;
    private TaskPage taskPage;

    public LoginPage loginPage() {
        if (loginPage == null) loginPage = new LoginPage();
        return loginPage;
    }

    public TopmenuPage topmenuPage() {
        if (topmenuPage == null) topmenuPage = new TopmenuPage();
        return topmenuPage;
    }

    public SidemenuPage sidemenuPage() {
        if (sidemenuPage == null) sidemenuPage = new SidemenuPage();
        return sidemenuPage;
    }

    public TaskPage taskPage() {
        if (taskPage == null) taskPage = new TaskPage();
        return taskPage;
    }


}
