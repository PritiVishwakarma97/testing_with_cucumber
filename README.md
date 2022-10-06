# testing_with_cucumber
A simple demo project for learning Cucumber framework with TypeScript and Puppeteer.

# Description
**Cucumber** is a tool that supports **Behavior-Driven Development(BDD)**.
Cucumer reads executable specifications written in plain text and validates that software does what those specifications say. Specifications consists of mutiple example or scenarios. Each scenario has a list of steps, which should be peformed by cucumber.

**Gherkin langugage** - It is a basic set of grammer rules that makes the plain text structured enough for cucumber to understand (Basic syntax rules which should be followed while writting the scenarios/specifications). Gherkin documents are stored in **.feature** file.

# Technologies Used
* Node
* TypeScript
* Puppeteer
* Cucumber

# Execution
- Run below command to start the execution of all the scenarios

  `npm test`
  
  or
    
   `npx cucumber-js`
    
  
- To run a single feature
  
  `npm test path/to/feature/file`
  
- To run scenarios of features filtered by tags

  `npm test -- --tags "@UI_Interaction"`  
 or
              
  `npx cucumber-js --tags "@UI_Interaction"`
              

# Screenshots
Simple feature file

![image](https://user-images.githubusercontent.com/47020813/193572257-0f102ec6-7d24-4ee2-991f-d5173b58885a.png)

Console output

![image](https://user-images.githubusercontent.com/47020813/193571927-7738a22b-6492-44d1-8fa5-108b435e58cd.png)

HTML Report

![image](https://user-images.githubusercontent.com/47020813/193571993-e43deab5-41c5-45d4-a3e4-7422847f3116.png)



# Setup

1. Download and install node.js on your system 
2. Take clone of the repo or download it
3. From inside the working directory run, `npm install` on terminal
4. Install Cucumber extension in vs code

# References

1. https://cucumber.io/
2. https://github.com/cucumber/cucumber-js/tree/main/docs


