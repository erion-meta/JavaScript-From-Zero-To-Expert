// 1. A closure is the closed-over variable environment of the execution context
// in which a function was created, even after that execution context is gone.

// 2. A closure gives a function access to all the variables of its parent function
// even after that parent function has returned. The function keeps a reference to its
// outer scope, which preserves the scope chain throughout time.

// 3. A closure makes sure that a function doesn't loose connection to variables that
// existed at the function's birth place.

// 4. A closure is like a backpack that a function carries around wherever it goes. This
// backpack has all the variables that were present in the environment where the function
// was created.
