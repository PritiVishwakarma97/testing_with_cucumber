import {Given, When, Then} from "@cucumber/cucumber";
import assert from "assert";
import { Calculator } from "../../src/calculator";

Given("a calculator", function(){
    this.calculator = new Calculator();
});

When(/^we add (\d+) and (\d+)$/, function(num1: number, num2: number){
   this.calculator.add(num1, num2);
});

Then(/^the result should be (\d+)$/, function(result: number){
    assert.equal(this.calculator.getResult(), result);
});
