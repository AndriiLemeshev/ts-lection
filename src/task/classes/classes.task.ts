/**
 * Defines the interface for a counter object.
 * @interface ICounter
 */
export interface ICounter {
    /**
     * Increments the counter.
     * @method count
     * @returns {void}
     */
    count(): void;

    /**
     * Returns the current value of the counter.
     * @method result
     * @returns {number} The current count.
     */
    result(): number;
}

/**
 * TODO: Uncomment class and implement it according to jsdoc.
 *
 * Implements a counter class that increments a number.
 * @class Counter
 * @implements {ICounter}
 */
// export class Counter implements ICounter {
// }
