Feature: Test calculator

  Background: 
        Given a calculator

  Scenario: Test add method
    When we add 2 and 3
    Then the result should be 5

  @negative
  Scenario: Test add method
    When we add 2 and 3
    Then the result should not be 6

  Scenario: Test subtract method
    When we subtract 2 from 3
    Then the result should be 1

  Scenario: Test multiply method
    When we multiply 2 and 3
    Then the result should be 6

  Scenario Outline: Data-driven test
    When we add <operand1> and <operand2>
    Then the result should be <result>

    Examples: 
      | operand1 | operand2 | result |
      |        0 |        0 |      0 |
      |        0 |        1 |      1 |
      |       10 |        5 |     15 |
      |      320 |       45 |    365 |

