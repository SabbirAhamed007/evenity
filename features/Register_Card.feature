Feature: Test Register Your Card

  @tag1
  Scenario: Register card test scenario
    Given Open evenity site
    And click on patient
    And click on register from dropdown menu
    And click on Register Your Card button
    When I complete Eligibility qn
    Then Enter Patient Information
    And close the browser
