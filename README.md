# Express.js: Unexpected token } in JSON at position X

This repository demonstrates an uncommon error in Express.js applications: the "Unexpected token } in JSON at position X" error. This error usually arises from issues with JSON parsing, often stemming from malformed JSON data received from external sources or generated within the application.

## Bug Description

The `bug.js` file contains an Express.js application that simulates receiving malformed JSON data.  This leads to an `Unexpected token } in JSON at position X` error during JSON parsing.  The exact position (X) varies depending on the nature of the malformed JSON.

## Solution

The `bugSolution.js` file provides a solution. It introduces robust error handling to catch JSON parsing errors, providing more informative error messages and preventing the application from crashing.  It also demonstrates techniques for validating and sanitizing JSON data before parsing, reducing the likelihood of this error.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to see the error.
5. Run `node bugSolution.js` to see the corrected version.