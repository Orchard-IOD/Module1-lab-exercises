// Write a specification comment for each function

/**
 * Subtracts the second number from the first and returns a result
 * @param {number} a
 * @param {number} b - the number to be subtracted from a
 * @returns {number} - the result of the subtraction operation
 */
function subtraction(a, b) {
  const result = a - b;
  return result;
}

/**
 * Adds two numbers and returns the result.
 * @param {number} a - the first number provided.
 * @param {number} b - the second number to add to the first number.
 * @returns {number} - the result of the addition operation
 */
function addition(a, b) {
  const result = a + b;
  return result;
}

/**
 * Divides two numbers and returns the result.
 * @param {number} a - the first number provided.
 * @param {number} b - the second number to be divided into the first number.
 * @returns {number} - the result of the division operation
 */
function division(a, b) {
  const result = a / b;
  return result;
}

/**
 * Multiplies two numbers and returns the result.
 * @param {number} a - the first number provided.
 * @param {number} b - the second number to be multiplies with the first number.
 * @returns {number} - the result of the multiplication operation
 */
function multiplication(a, b) {
  const result = a * b;
  return result;
}

// ==============================================

// Write at least 3 unit tests for each function

// ==============================================

// subtraction unit tests
// test to see if subtraction result returned is correct
function testSubtractionForCorrectResult() {
  if (subtraction(4, 2) == 2) {
    console.log("Subtraction test passed");
  } else {
    console.log("Test failed");
  }
}

// test to see if first input is a number
function testSubtractionFirstParamIsANumber(){
    if (isNaN(subtraction('a', 2))) {
        console.log("Test failed: Subtraction first input is not a number")
    }
}

// test to see if second input is a number
function testSubtractionSecondParamIsANumber(){
    if (isNaN(subtraction(4, 'b'))) {
        console.log("Test failed: Subtraction second input is not a number")
    }
}

// run subtraction test suite
testSubtractionForCorrectResult();
testSubtractionFirstParamIsANumber();
testSubtractionSecondParamIsANumber();

// ==============================================

// addition unit tests

// test to see if addition result returned is correct
function testAdditionForCorrectResult() {
  if (addition(2, 3) == 5) {
    console.log("Addition test passed");
  } else {
    console.log("Test failed");
  }
}

// test to see if first input is a number
function testAdditionFirstParamIsANumber(){
    if (isNaN(addition('a', 3))) {
        console.log("Test failed: Addition first input is not a number")
    }
}

// test to see if second input is a number
function testAdditionSecondParamIsANumber(){
    if (isNaN(addition(2, 'b'))) {
        console.log("Test failed: Addition second input is not a number")
    }
}

// run addition test suite
testAdditionForCorrectResult();
testAdditionFirstParamIsANumber();
testAdditionSecondParamIsANumber();

// ==============================================

// division unit tests

// test to see if division result returned is correct
function testDivisionForCorrectResult() {
  if (division(9, 3) == 3) {
    console.log("Division test passed");
  } else {
    console.log("Test failed");
  }
}

// test to see if first input is a number
function testDivisionFirstParamIsANumber(){
    if (isNaN(division('a', 3))) {
        console.log("Test failed: Division first input is not a number")
    }
}

// test to see if second input is a number
function testDivisionSecondParamIsANumber(){
    if (isNaN(division(9, 'b'))) {
        console.log("Test failed: Division second input is not a number")
    }
}

// run addition test suite
testDivisionForCorrectResult();
testDivisionFirstParamIsANumber();
testDivisionSecondParamIsANumber();

// ==============================================

// multiplication unit tests

// test to see if multiplication result returned is correct
function testMultiplicationForCorrectResult() {
  if (multiplication(3, 5) == 15) {
    console.log("Multiplication test passed");
  } else {
    console.log("Test failed");
  }
}

// test to see if first input is a number
function testMultiplicationFirstParamIsANumber(){
    if (isNaN(multiplication('a', 5))) {
        console.log("Test failed: Multiplication first input is not a number")
    }
}

// test to see if second input is a number
function testMultiplicationSecondParamIsANumber(){
    if (isNaN(multiplication(3, 'b'))) {
        console.log("Test failed: Multiplication second input is not a number")
    }
}

// run multiplication test suite
testMultiplicationForCorrectResult();
testMultiplicationFirstParamIsANumber();
testMultiplicationSecondParamIsANumber();