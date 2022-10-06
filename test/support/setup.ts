import {Before, After, BeforeAll} from "@cucumber/cucumber";
import * as config from '../../config/config.json';
import { cleanupFolder } from "../../helpers/fileManager";
import { Logger } from "../../helpers/logManager";

const logger = new Logger("setup");

Before(function(scenario){
    logger.info(`Execution started: ${scenario.pickle.name}`);
});

After(function(scenario){
    const status = scenario.result?.status; 
    logger.info(`Scenario status: ${status}`);
    if(status === "FAILED"){
        logger.error("Failure Reason: " + scenario.result?.message);
    }
    logger.info("Execution ended: " + scenario.pickle.name);
})

BeforeAll(function(){
    console.log("Initial set up");
    
    //cleanup screenshots folder
    cleanupFolder(config.test.screenshotDir);
    console.log(config.test.screenshotDir + " is cleaned");

    //initialize logger
    Logger.initializeLogger(config.test.logFilePath);
});

