import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { GoogleVisit } from "./POM/visitURL";

const visit = new GoogleVisit()

Given("I open the LinkedIn homepage", () => {
  visit.visitGoogle()
});
