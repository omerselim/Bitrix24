package com.bitrix24.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-cucumber-reports" },

//       tags = {"@addNewTask"},

        features = {"src/test/resources/features"},      // to specify where are the features. feature contains scenarios, every scenario is like a test

        glue = {"com/bitrix24/step_definitions"},

        dryRun = false                                  //dryRun = true  --> generates step definitions automatically
)
public class CukesRunner {

}
