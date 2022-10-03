import {Before, After} from "@cucumber/cucumber";

Before(function(scenario){
    console.log(`Execution started: ${scenario.pickle.name}`);
});

After(function(scenario){
    console.log(`Senario Status: ${scenario.result?.status}`)
})
