# Type 'string' is not assignable to type 'number'

This repository contains a simple example of a type error in TypeScript. The error occurs when you try to pass a string argument to a function that expects a number.

## Problem

The `add` function is defined to take two numbers as arguments and return a number.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

However, in the following code, we try to pass two strings to the function:

```typescript
let result = add("hello", "world");
```

This results in the following error:

```
Type 'string' is not assignable to type 'number'.
```

## Solution

The solution is to ensure that the arguments passed to the `add` function are numbers.  This can be done in several ways, including type checking and type casting, or ensuring the inputs are numbers initially.

The solution file provides a corrected version of the code.