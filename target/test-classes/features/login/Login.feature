@login
Feature: Login
	As user I want to login under different roles
#  @Background:

	@login_hr
	Scenario: user logs in as a hr user
		Then login as a "hr"
		And verify mainpage title.
        Then verify "hr" user name on the main page.

	@login_helpdesk
	Scenario: user logs in as a helpdesk user
		Then login as a "helpdesk"
        And verify mainpage title.
        Then verify "helpdesk" user name on the main page.

    @login_marketing
    Scenario: user logs in as a marketing user
      Then login as a "marketing"
      And verify mainpage title.
      Then verify "marketing" user name on the main page.

	@login_negative01
	Scenario: Verify warning message for invalid credentials
		Then user logs in with "wrong" username and "wrong" password
		And user verifies that warning message is displayed

	@login_negative02
	Scenario Outline: Verify warning message for invalid credentials
		Given user logs in with following invalid credentials "<username>" and-or "<password>".
        And user verifies that warning message is displayed

		Examples: Credentials information
			| username                        | password    |
			| username                        | password    |
            | helpdesk19@cybertekschool.com   | Useruser    |
            | helpdesk19@cybertekschool.com   | userUser    |
			| helpdesk19@cybertekschool.com   | useruser    |
            | helpdesk19@cybertekschool.com   | serUser     |
			| helpdesk19@cybertekschool.com   | UserUse     |
			| helpdesk19@cybertekschool.com   | User User   |
			| helpdesk19@cybertekschool.com   | USERUSER    |
			| helpdesk19@cybertekschool.co    | UserUser    |
			| elpdesk19@cybertekschool.com    | UserUser    |
			| helpdesk19@cybertekschoolcom    | UserUser    |
            | marketing19@cybertekschool.co   | UserUser    |
            | arketing19@cybertekschool.com   | UserUser    |
            | marketing19@cybertekschoolcom   | UserUser    |




    @login_1
	Scenario Outline: login as different user tests
		When login as a "<user_type>"
        And verify mainpage title.
        Then verify "<name>" on the main page.

		Examples:
			| user_type     | name                           |
			| hr            | hr19@cybertekschool.com        |
			| helpdesk      | helpdesk19@cybertekschool.com  |
			| marketing     | marketing19@cybertekschool.com |

    @login_with_outline_2
    Scenario Outline: Users login test
      Given user logs in with following "<username>" and "<password>".
      And verify "<main page title>".
      Then verify "<name>" on the main page.

      Examples: Credentials information
        | username                        | password    | name                           | main page title |
        | helpdesk19@cybertekschool.com   | UserUser    | helpdesk19@cybertekschool.com  | NextbaseCRM 	   |
        | helpdesk20@cybertekschool.com   | UserUser    | helpdesk20@cybertekschool.com  | NextbaseCRM     |
        | marketing19@cybertekschool.com  | UserUser    | marketing19@cybertekschool.com | NextbaseCRM     |
        | marketing20@cybertekschool.com  | UserUser    | marketing20@cybertekschool.com | NextbaseCRM     |
        | hr19@cybertekschool.com         | UserUser    | hr19@cybertekschool.com        | NextbaseCRM     |
        | hr20@cybertekschool.com         | UserUser    | hr20@cybertekschool.com        | NextbaseCRM     |


