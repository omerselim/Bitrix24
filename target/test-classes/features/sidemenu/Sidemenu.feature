@navigation_sideMenu
Feature: Navigation menu options
  As user I want to use top menu for navigation

    @navigation_sidemenu
    Scenario Outline: page titles with different users
      Given login as a "<user_type>"
      And navigates to sidebar "<menu>"
      Then verify the page title "<title>"

      Examples: User and navigation info
        | user_type   | menu              | title                   |
        | helpdesk    | Activity Stream   | Activity Stream         |
        | helpdesk    | Tasks             | My tasks                |
        | helpdesk    | Chat and Calls    | Chat and Calls          |
        | helpdesk    | Drive             | My Drive                |
        | helpdesk    | Calendar          | Calendar                |
        | helpdesk    | Workgroups        | Workgroups and projects |
        | helpdesk    | Mail              | Mailbox Integration     |
        | helpdesk    | Contact Center    | Contact Center          |
        | helpdesk    | Time and Reports  | Absence Chart           |
        | helpdesk    | Employees         | Company Structure       |
        | helpdesk    | Services          | Meeting Rooms           |
        | helpdesk    | Company           | Company                 |
        | hr          | Activity Stream   | Activity Stream         |
        | hr          | Tasks             | My tasks                |
        | hr          | Chat and Calls    | Chat and Calls          |
        | hr          | Drive             | My Drive                |
        | hr          | Calendar          | Calendar                |
        | hr          | Workgroups        | Workgroups and projects |
        | hr          | Mail              | Mailbox Integration     |
        | hr          | Contact Center    | Contact Center          |
        | hr          | Time and Reports  | Absence Chart           |
        | hr          | Employees         | Company Structure       |
        | hr          | Services          | Meeting Rooms           |
        | hr          | Company           | Company                 |
        | marketing   | Activity Stream   | Activity Stream         |
        | marketing   | Tasks             | My tasks                |
        | marketing   | Chat and Calls    | Chat and Calls          |
        | marketing   | Drive             | My Drive                |
        | marketing   | Calendar          | Calendar                |
        | marketing   | Workgroups        | Workgroups and projects |
        | marketing   | Mail              | Mailbox Integration     |
        | marketing   | Contact Center    | Contact Center          |
        | marketing   | Time and Reports  | Absence Chart           |
        | marketing   | Employees         | Company Structure       |
        | marketing   | Services          | Meeting Rooms           |
        | marketing   | Company           | Company                 |
