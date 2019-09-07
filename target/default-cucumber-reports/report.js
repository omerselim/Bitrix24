$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\sidemenu\\Sidemenu.feature");
formatter.feature({
  "name": "Navigation menu options",
  "description": "  As user I want to use top menu for navigation",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    }
  ]
});
formatter.scenarioOutline({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.step({
  "name": "login as a \"\u003cuser_type\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "navigates to sidebar \"\u003cmenu\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the page title \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "User and navigation info",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user_type",
        "menu",
        "title"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Activity Stream",
        "Activity Stream"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Tasks",
        "My tasks"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Chat and Calls",
        "Chat and Calls"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Drive",
        "My Drive"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Calendar",
        "Calendar"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Workgroups",
        "Workgroups and projects"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Mail",
        "Mailbox Integration"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Contact Center",
        "Contact Center"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Time and Reports",
        "Absence Chart"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Employees",
        "Company Structure"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Services",
        "Meeting Rooms"
      ]
    },
    {
      "cells": [
        "helpdesk",
        "Company",
        "Company"
      ]
    },
    {
      "cells": [
        "hr",
        "Activity Stream",
        "Activity Stream"
      ]
    },
    {
      "cells": [
        "hr",
        "Tasks",
        "My tasks"
      ]
    },
    {
      "cells": [
        "hr",
        "Chat and Calls",
        "Chat and Calls"
      ]
    },
    {
      "cells": [
        "hr",
        "Drive",
        "My Drive"
      ]
    },
    {
      "cells": [
        "hr",
        "Calendar",
        "Calendar"
      ]
    },
    {
      "cells": [
        "hr",
        "Workgroups",
        "Workgroups and projects"
      ]
    },
    {
      "cells": [
        "hr",
        "Mail",
        "Mailbox Integration"
      ]
    },
    {
      "cells": [
        "hr",
        "Contact Center",
        "Contact Center"
      ]
    },
    {
      "cells": [
        "hr",
        "Time and Reports",
        "Absence Chart"
      ]
    },
    {
      "cells": [
        "hr",
        "Employees",
        "Company Structure"
      ]
    },
    {
      "cells": [
        "hr",
        "Services",
        "Meeting Rooms"
      ]
    },
    {
      "cells": [
        "hr",
        "Company",
        "Company"
      ]
    },
    {
      "cells": [
        "marketing",
        "Activity Stream",
        "Activity Stream"
      ]
    },
    {
      "cells": [
        "marketing",
        "Tasks",
        "My tasks"
      ]
    },
    {
      "cells": [
        "marketing",
        "Chat and Calls",
        "Chat and Calls"
      ]
    },
    {
      "cells": [
        "marketing",
        "Drive",
        "My Drive"
      ]
    },
    {
      "cells": [
        "marketing",
        "Calendar",
        "Calendar"
      ]
    },
    {
      "cells": [
        "marketing",
        "Workgroups",
        "Workgroups and projects"
      ]
    },
    {
      "cells": [
        "marketing",
        "Mail",
        "Mailbox Integration"
      ]
    },
    {
      "cells": [
        "marketing",
        "Contact Center",
        "Contact Center"
      ]
    },
    {
      "cells": [
        "marketing",
        "Time and Reports",
        "Absence Chart"
      ]
    },
    {
      "cells": [
        "marketing",
        "Employees",
        "Company Structure"
      ]
    },
    {
      "cells": [
        "marketing",
        "Services",
        "Meeting Rooms"
      ]
    },
    {
      "cells": [
        "marketing",
        "Company",
        "Company"
      ]
    }
  ]
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Activity Stream\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Activity Stream\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span[id\u003d\u0027pagetitle\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59O3I4O\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ostur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53733}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 89c45316a9835598369a004f77831ade\n*** Element info: {Using\u003dcss selector, value\u003dspan[id\u003d\u0027pagetitle\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.bitrix24.utilities.BrowserUtils.waitForStaleElement(BrowserUtils.java:348)\r\n\tat com.bitrix24.utilities.BasePage.getPageTitle(BasePage.java:46)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Activity Stream\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Tasks\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"My tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Chat and Calls\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Chat and Calls\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Drive\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"My Drive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Calendar\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Calendar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span[id\u003d\u0027pagetitle\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59O3I4O\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ostur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53883}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: dfa19fd7a18611aa90f12365a3e51a48\n*** Element info: {Using\u003dcss selector, value\u003dspan[id\u003d\u0027pagetitle\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.bitrix24.utilities.BrowserUtils.waitForStaleElement(BrowserUtils.java:348)\r\n\tat com.bitrix24.utilities.BasePage.getPageTitle(BasePage.java:46)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Calendar\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Workgroups\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Workgroups and projects\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Mail\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Mailbox Integration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Mailbox Integr]ation\u003e but was:\u003c[EULA viol]ation\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Mailbox Integration\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Contact Center\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Contact Center\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Time and Reports\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Absence Chart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Employees\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Company Structure\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Services\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Meeting Rooms\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"helpdesk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Company\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Company\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Activity Stream\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Activity Stream\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span[id\u003d\u0027pagetitle\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59O3I4O\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ostur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f46b3893defed53c60f581a36f83620f\n*** Element info: {Using\u003dcss selector, value\u003dspan[id\u003d\u0027pagetitle\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.bitrix24.utilities.BrowserUtils.waitForStaleElement(BrowserUtils.java:348)\r\n\tat com.bitrix24.utilities.BasePage.getPageTitle(BasePage.java:46)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Activity Stream\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Tasks\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"My tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Chat and Calls\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Chat and Calls\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Drive\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"My Drive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Calendar\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Calendar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Workgroups\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Workgroups and projects\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Mail\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Mailbox Integration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Contact Center\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Contact Center\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Contact Center]\u003e but was:\u003c[EULA violation]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Contact Center\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Time and Reports\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Absence Chart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Employees\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Company Structure\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Services\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Meeting Rooms\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"hr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Company\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Company\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Company]\u003e but was:\u003c[EULA violation]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Company\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Activity Stream\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Activity Stream\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span[id\u003d\u0027pagetitle\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59O3I4O\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ostur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 89524f7ac1af34958076130f9898385f\n*** Element info: {Using\u003dcss selector, value\u003dspan[id\u003d\u0027pagetitle\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.bitrix24.utilities.BrowserUtils.waitForStaleElement(BrowserUtils.java:348)\r\n\tat com.bitrix24.utilities.BasePage.getPageTitle(BasePage.java:46)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Activity Stream\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Tasks\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"My tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[My tasks]\u003e but was:\u003c[EULA violation]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"My tasks\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Chat and Calls\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Chat and Calls\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span[id\u003d\u0027pagetitle\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59O3I4O\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ostur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54699}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2a7e4c9f4ba171f01f94b10e3916a015\n*** Element info: {Using\u003dcss selector, value\u003dspan[id\u003d\u0027pagetitle\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.bitrix24.utilities.BrowserUtils.waitForStaleElement(BrowserUtils.java:348)\r\n\tat com.bitrix24.utilities.BasePage.getPageTitle(BasePage.java:46)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Chat and Calls\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Drive\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"My Drive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Calendar\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Calendar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Workgroups\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Workgroups and projects\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Mail\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Mailbox Integration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Contact Center\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Contact Center\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span[id\u003d\u0027pagetitle\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59O3I4O\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ostur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54914}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 26369bb084444945d9c6f43ca81023fb\n*** Element info: {Using\u003dcss selector, value\u003dspan[id\u003d\u0027pagetitle\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.bitrix24.utilities.BrowserUtils.waitForStaleElement(BrowserUtils.java:348)\r\n\tat com.bitrix24.utilities.BasePage.getPageTitle(BasePage.java:46)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Contact Center\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Time and Reports\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Absence Chart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Employees\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Company Structure\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Company Structure]\u003e but was:\u003c[EULA violation]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Company Structure\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Services\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Meeting Rooms\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@navigation_sideMenu"
    },
    {
      "name": "@navigation_sidemenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login as a \"marketing\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.userLogsInAsA(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to sidebar \"Company\"",
  "keyword": "And "
});
formatter.match({
  "location": "SidemenuStepDefinitions.navigatesToSide(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page title \"Company\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SidemenuStepDefinitions.verifyThePageTitle(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"span[id\u003d\u0027pagetitle\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59O3I4O\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ostur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c20676550a99860e990a2a47a7f3ad9d\n*** Element info: {Using\u003dcss selector, value\u003dspan[id\u003d\u0027pagetitle\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy33.isDisplayed(Unknown Source)\r\n\tat com.bitrix24.utilities.BrowserUtils.waitForStaleElement(BrowserUtils.java:348)\r\n\tat com.bitrix24.utilities.BasePage.getPageTitle(BasePage.java:46)\r\n\tat com.bitrix24.step_definitions.SidemenuStepDefinitions.verifyThePageTitle(SidemenuStepDefinitions.java:22)\r\n\tat ✽.verify the page title \"Company\"(src\\test\\resources\\features\\sidemenu\\Sidemenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "status": "passed"
});
});