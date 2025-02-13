/**
 * Creates a tuple containing a number, a string, and a boolean.
 *
 * @param a - The number.
 * @param b - The string.
 * @param c - The boolean.
 * @returns A tuple containing the number, string, and boolean.
 *
 * @example
 * ```typescript
 * const myTuple = makeTuple(10, "hello", true);
 * console.log(myTuple); // Output: [10, "hello", true]
 * ```
 */
export default function makeTuple(a: number, b: string, c: boolean): [number, string, boolean] {
    return [a, b, c];
}
