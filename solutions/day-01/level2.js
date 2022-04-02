// Level 2

// Javascript 0-3

// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
<script type="text/javascript" src="countries.js"></script> // refer at the end of HTML <body> tag
<script type="text/javascript" src="web_techs.js"></script> // refer at the end of HTML <body> tag

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let textArray = text.replace(/[^\w\s]/gi, "").split(" ");
console.log(textArray);
console.log(textArray.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.indexOf('Meat') === -1) {
    shoppingCart.unshift('Meat');
} else {
    console.log('Meat is already in the shopping cart');
}

// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.indexOf('Sugar') === -1) {
    shoppingCart.push('Sugar');
} else {
    console.log('Sugar is already in the shopping cart');
}

// remove 'Honey' if you are allergic to honey
if (shoppingCart.indexOf('Honey') !== -1) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
} else {
    console.log('You are not allergic to honey');
}

// modify Tea to 'Green Tea'
if (shoppingCart.indexOf('Tea') !== -1) {
    shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
} else {
    console.log('Tea is not in the shopping cart');
}

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.indexOf('Ethiopia') !== -1) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf('Sass') !== -1) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);