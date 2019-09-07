@navigation_topMenu
Feature: Navigation menu options
  As user I want to use top menu for navigation

    @navigation_topmenu
    Scenario Outline: page titles with different users
      Given login as a "<user_type>"
      And navigates to tab "<menu>"
      Then verify the text of the "<element>"

      Examples: User and navigation info
        | user_type   | menu        | element              |
        | hr          | Message     | Send                  |
#        | hr          | Task       | Vehicles Model - Entities - System - Car - Entities - System       |
#        | hr          | Event      | Accounts - Customers                                               |
#        | hr          | Poll       | Contacts - Customers                                               |
#        | hr          | Message    | Jobs - System                                                      |
#        | helpdesk    | Fleet      | All - Car - Entities - System - Car - Entities - System            |
#        | helpdesk    | Fleet      | All - Vehicles Model - Entities - System - Car - Entities - System |
#        | helpdesk    | Customers  | All - Accounts - Customers                                         |
#        | helpdesk    | Customers  | All - Contacts - Customers                                         |
#        | helpdesk    | Activities | All - Calendar Events - Activities                                 |
#        | helpdesk    | System     | All - Jobs - System                                                |
#        | marketing   | Fleet      | All - Car - Entities - System - Car - Entities - System            |
#        | marketing   | Fleet      | All - Vehicles Model - Entities - System - Car - Entities - System |
