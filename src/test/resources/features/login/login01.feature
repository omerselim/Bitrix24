Feature: 

	#*User Story:*
	#As an authorized user I should be able to access the Vehicle Contract page.
	# 
	#*Acceptance Criteria:*
	#1. Verify that Only authorized user should be able to access Vehicle Contract.
	#(Note: authorized users: store manager, sales manager, admin)
	#2.Verify that Non authorized user should not be able to access Vehicle Contract
	#(Note: Truck driver)
	@VYT12-86
	Scenario: As an authorized user I should be able to access the Vehicle Contract page.
		Feature:    As a store manager, sales manager; I should be able to access the Vehicle Contract page,
		            As a truck driver; I should not be able to access the Vehicle Contract page.
		    
		    Background:
		        Given user is on the landing page
		
		    Scenario: Login as different users
		        Given user logs in with following credentials
		            | username1 | storemanager69  |
		            | username2 | storemanager70  |
		            | username3 | salesmanager128 |
		            | username4 | salesmanager129 |
		            | username5 | salesmanager130 |
		            | password  | UserUser123     |
		            
		        Then user navigates to "Fleet" and "Vehicle Contract" page.
		        And  verifies that "All Vehicle Contract" page name is displayed
		        
		   Scenario: Login as a driver.
		        Given user logs in with following credentials
		            | username1 | user27     |
		            | username2 | user28     |
		            | username3 | user29     |
		            | password  | UserUser123|
		            
		        Then user navigates to "Fleet" and "Vehicle Contract" page.
		        And  verifies that "You do not have permission to perform this action" varning vindow is displayed
		