// Level 1

// Javascript 0-3

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array;
let newArray = []; // OR let newArray = Array();

// Declare an array with more than 5 number of elements
let newArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the length of your array
console.log("Countries: ", countries.length);
console.log("WebTechs: ", webTechs.length);

// Get the first item, the middle item and the last item of the array
console.log("First item: ", countries[0]);
console.log("Middle item: ", countries[countries.length / 2]);
console.log("Last item: ", countries[countries.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
  1,
  "string",
  true,
  null,
  undefined,
  {},
  [],
  () => {},
  new Date(),
];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Print the array using console.log()
console.log("IT Companies: ", itCompanies);

// Print the number of companies in the array
console.log("Number of companies: ", itCompanies.length);

// Print the first company, middle and last company
console.log("First company: ", itCompanies[0]);
console.log("Middle company: ", itCompanies[itCompanies.length / 2]);
console.log("Last company: ", itCompanies[itCompanies.length - 1]);

// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log("Company: ", itCompanies[i]);
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log("Company: ", itCompanies[i]);
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", ") + " are big IT companies.");

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.indexOf(company) != -1) {
    console.log("Company: ", company, " is found.");
} else {
    console.log("Company: ", company, " is not found.");
}

// Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].match(/o/g).length > 1) {
        console.log("Company: ", itCompanies[i], " has more than one 'o'");
    }
}

// Sort the array using sort() method
itCompanies.sort();

// Reverse the array using reverse() method
itCompanies.reverse();

// Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);

// Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);

// Slice out the middle IT company or companies from the array
let middleThreeCompanies = itCompanies.slice(2, 5);

// Remove the first IT company from the array
let firstCompany = itCompanies.shift();

// Remove the middle IT company or companies from the array
let middleCompanies = itCompanies.splice(Math.round(itCompanies.length / 2), 2);

// Remove the last IT company from the array
let lastCompany = itCompanies.pop();

// Remove all IT companies
let allCompanies = itCompanies.splice(0, itCompanies.length);
