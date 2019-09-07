package com.bitrix24.step_definitions;

import com.bitrix24.utilities.ExcelUtil;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public class LoginExcelStepDefinitions {
    Pages pages=new Pages();



    @Then("^I input username and passwords from excel file row\"([^\"]*)\" dataset$")
    public void iInputUsernameAndPasswordsWithExcelRowDataset(int rownum) throws IOException {
//        pages.loginPage().LoginExcelCredential01(rownum);
        pages.loginPage().LoginExcelCredential02(rownum);

    }



    @When("pull credential from excel data set to login according to the {string}")
    public void pullCredentialFromExcelDataSetToLoginAccordingToThe(String userType) {
        String filePath="C:\\Users\\ostur\\IdeaProjects\\Bitrix24\\src\\test\\resources\\externalDataFiles\\BitrixData.xlsx";
        ExcelUtil excelUtil=new ExcelUtil(filePath,"Credentials");
        List<Map<String,String>> dataList=excelUtil.getDataList();

        for (Map<String,String >rowMap:dataList){
            if(userType.equalsIgnoreCase(rowMap.get("User"))) {
                String username=rowMap.get("Username");
                String password=rowMap.get("Password");
                pages.loginPage().login(username,password);
            }
        }
    }

}
