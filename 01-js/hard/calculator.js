/*
  Implement a class `Calculator` having below methods
    - initialize a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  // method to add numbers
  add(number) {
    this.result += number;
    return this.result;
  }

  // method to subtract numbers
  subtract(number) {
    this.result -= number;
    return this.result;
  }

  // method to multiply numbers
  multiply(number) {
    this.result *= number;
    return this.result;
  }

  // method to divide numbers
  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
    return this.result;
  }

  // method to clear result
  clear() {
    this.result = 0;
    return this.result;
  }

  // method to get result
  getResult() {
    return this.result;
  }

  // method to calculate expression
  calculate(expression) {
    // Remove all spaces from the expression
    expression = expression.replace(/\s+/g, "");

    // Validate the expression to contain only valid characters (digits, operators, and parentheses)
    if (!/^[0-9+\-*/().]*$/.test(expression)) {
      throw new Error("Invalid expression");
    }

    // Check for division by zero
    if (/\/0/.test(expression)) {
      throw new Error("Cannot divide by zero");
    }

    try {
      // Evaluate the expression using the Function constructor
      this.result = Function('"use strict";return (' + expression + ")")();
      return this.result;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
