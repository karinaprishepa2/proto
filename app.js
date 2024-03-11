// Function to perform memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        // Use the arguments as the cache key
        const key = JSON.stringify(args);
        if (!cache[key]) {
            // Cache the result of the function call if not already cached
            cache[key] = fn.apply(this, args);
        }
        // Return the cached result
        return cache[key];
    };
}

// Example usage with a factorial function
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

// The first call will compute the result
console.log(memoizedFactorial(5)); // 120

// Subsequent calls with the same argument will return the cached result
console.log(memoizedFactorial(5)); // 120 (cached)
