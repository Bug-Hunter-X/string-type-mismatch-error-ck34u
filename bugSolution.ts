function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20); // Correct usage

// Using type assertion (use with caution):
let result2 = add(Number("10"), Number("20"));

//Adding type checking
function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}
let result3 = addSafe(10, 20); // Correct usage
//let result4 = addSafe("10", 20); // This will throw an error