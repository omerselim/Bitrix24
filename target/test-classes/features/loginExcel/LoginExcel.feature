Feature: Using an excel spreadsheet to get login credential.

  @loginExcel_01
  Scenario Outline: Login throughout data driven from external excel data sets according to the row index number.
    Then I input username and passwords from excel file row"<row_index>" dataset
    Then verify mainpage title.
    Examples:
      | row_index  |
      | 1          |
      | 2          |
      | 3          |
      | 4          |
      | 5          |
      | 6          |

  @loginExcel_02
  Scenario Outline: Login throughout data Driven from external excel data sets according to the types of users.
    When pull credential from excel data set to login according to the "<user_type>"
    Then verify mainpage title.

    Examples:
      | user_type |
      | helpdesk  |
      | marketing |
      | hr        |







