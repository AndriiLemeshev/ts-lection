// import makeTuple from "./basic-types.task";

// describe('makeTuple', () => {
//     it('should create a tuple with the correct types and values', () => {
//         const tuple = makeTuple(10, "hello", true);
//         expect(tuple).toEqual([10, "hello", true]); // Check value and order
//         expect(typeof tuple[0]).toBe('number');       // Check type of first element
//         expect(typeof tuple[1]).toBe('string');       // Check type of second element
//         expect(typeof tuple[2]).toBe('boolean');      // Check type of third element

//         const tuple2 = makeTuple(-5, "world", false);
//         expect(tuple2).toEqual([-5, "world", false]);
//         expect(typeof tuple2[0]).toBe('number');
//         expect(typeof tuple2[1]).toBe('string');
//         expect(typeof tuple2[2]).toBe('boolean');
//     });

//     it('should handle different input values', () => {
//         const tuple = makeTuple(0, "", false);
//         expect(tuple).toEqual([0, "", false]);

//         const tuple2 = makeTuple(123, "test string", true);
//         expect(tuple2).toEqual([123, "test string", true]);
//     });

//     it('should return a tuple', () => {
//       const tuple = makeTuple(1, 'a', true);
//       expect(Array.isArray(tuple)).toBe(true); // Is it an array?
//       expect(tuple.length).toBe(3);          // Does it have 3 elements?
//     });
// });
