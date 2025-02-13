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
 * Implements a counter class that increments a number.
 * @class Counter
 * @implements {ICounter}
 */
export class Counter implements ICounter {
    /**
     * The internal counter value (starts at 0 by default).
     * @private
     * @property cnt
     * @type {number}
     */
    private cnt: number;

    /**
     * Creates an instance of Counter.
     * @constructor
     * @param {number} [cnt=0] - The initial value of the counter (defaults to 0).
     */
    constructor(cnt = 0) {
        this.cnt = cnt;
    }

    /**
     * Increments the counter.
     * @method count
     * @returns {void}
     */
    count(): void {
        this.cnt++;
    }

    /**
     * Returns the current value of the counter.
     * @method result
     * @returns {number} The current count.
     */
    result(): number {
        return this.cnt;
    }
}
