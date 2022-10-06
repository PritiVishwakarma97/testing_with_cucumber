@UI_Interaction
Feature: New user registration

  Scenario: Provided all the details, new user registration should be successful
    Given following user details
      | firstName   | John          |
      | lastName    | Mathew        |
      | address     | Housing Board |
      | city        | Ponda         |
      | state       | Goa           |
      | zipCode     |          1234 |
      | ssn         |          1234 |
      | phoneNumber |    1234567890 |
      | username    | <random>      |
      | password    | test123       |
    And you are on home page
    When you click on Register link
    And enter all details
    And click Register button
    Then "Customer Created" page should be displayed
    And username should be displayed
