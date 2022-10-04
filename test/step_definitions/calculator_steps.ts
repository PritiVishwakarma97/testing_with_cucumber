import {Given, When, Then} from "@cucumber/cucumber";
import assert from "assert";
import { Calculator } from "../../src/calculator";

Given("a calculator", function(){
    this.calculator = new Calculator();
});

// Regular expression
When(/^we add (\d+) and (\d+)$/, function(num1: number, num2: number){
    this.calculator.add(num1, num2);
});

Then(/^the result should be (\d+)$/, function(expectedResult: number){
    assert.equal(this.calculator.getResult(), expectedResult);
});

Then(/^the result should not be (\d+)$/, function(expectedResult: number){
    assert.notEqual(this.calculator.getResult(), expectedResult);
});

// cucumber expression
When('we subtract {int} from {int}', function(num1: number, num2: number){
    this.calculator.subtract(num2, num1);
});

// cucumber expression
When('we multiply {int} and {int}', function(num1: number, num2: number){
    this.calculator.multiply(num1, num2);
});





