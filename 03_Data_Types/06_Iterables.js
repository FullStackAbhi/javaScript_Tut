// Iterable
//     ↓
// Has Symbol.iterator()

// Symbol.iterator()
//     ↓
// Returns Iterator

// Iterator
//     ↓
// Has next()

// next()
//     ↓
// Returns:
// {
//   done,
//   value
// }



// for...of
//     ↓
// Calls Symbol.iterator()
//     ↓
// Calls next() repeatedly
//     ↓
// Stops when done = true

// Remember this chain:





// Iterable
//    ↓
// Symbol.iterator()
//    ↓
// Iterator
//    ↓
// next()
//    ↓
// {done, value}