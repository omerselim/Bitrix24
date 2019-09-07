@tasks
Feature: As a user I should be able to create a task from activity stream.

  Scenario Outline: User should be able to create a task

    Given user on the landing page
    Then  user logs into application with "<username>" and "<password>"
    And user clicks on plus button on left of Tasks button
    Then user adds task on pop up form
    And user saves the form and task created
    Then  user verifies new task message displayed

    Examples:
      |username|password|
      |helpdesk45@cybertekschool.com|UserUser|


  Scenario Outline: Verify that user can add checklist regarding to new task.
    Given user on the landing page
    Then  user logs into application with "<username>" and "<password>"
    Then  user clicks on plus button on left of Tasks button
    And user adds task on pop up form
    And user adds checklist
    Then user verify checklist added to task
    Examples:
      |username|password|
      |helpdesk45@cybertekschool.com|UserUser|



  Scenario Outline: Verify that user can add file regarding to new task.
    Given user on the landing page
    Then  user logs into application with "<username>" and "<password>"
    Then  user clicks on plus button on left of Tasks button
    And user adds task on pop up form
    And user adds file
    Then user verify file added to task
    Examples:
      |username|password|
      |helpdesk45@cybertekschool.com|UserUser|





