@BTR_
Feature: Activity
  As a user I should be able to create a task from activity stream.

#  Verify that user can create new task by clicking on tasks on activity stream.
#  Verify that user can upload a file and image or link or add checklist regarding to new task.
#  Verify that user should be able to set up a deadline for new task.




  @CreateNnewTask
  Scenario Outline: Create new task by clicking on tasks on activity stream.
    Given logs in with "<username>" and "<password>"
    Then user navigates to "task" and "activity"
    Then the page title should be "<title>"

    Examples: Credentials information
      | username                        | password    | title         |
      | helpdesk19@cybertekschool.com   | UserUser    |  xxxxxxx      |
      | helpdesk20@cybertekschool.com   | UserUser    |               |
      | marketing19@cybertekschool.com  | UserUser    |               |
      | marketing20@cybertekschool.com  | UserUser    |               |
      | hr19@cybertekschool.com         | UserUser    |               |
      | hr20@cybertekschool.com         | UserUser    |               |

