/**
 * Represents the possible answers to a yes/no/maybe question.
 *
 * @enum {string}
 * @property {string} YES - Represents the affirmative answer "Yes".
 * @property {string} NO - Represents the negative answer "No".
 * @property {string} MAYBE - Represents the uncertain answer "Maybe".
 */
export enum YesNoMaybe {
    YES = 'Yes',
    NO = 'No',
    MAYBE = 'Maybe'
}

/**
 * Converts an optional boolean value to a YesNoMaybe enum.
 *
 * @param x - The optional boolean value.
 * @returns The corresponding YesNoMaybe enum value.  Returns MAYBE if x is undefined or null.
 *
 * @example
 * ```typescript
 * optionalBooleanToEnum(true);   // Returns YesNoMaybe.YES
 * optionalBooleanToEnum(false);  // Returns YesNoMaybe.NO
 * optionalBooleanToEnum(undefined); // Returns YesNoMaybe.MAYBE
 * optionalBooleanToEnum(); // Returns YesNoMaybe.MAYBE
 * ```
 */
export function optionalBooleanToEnum(x?: boolean): YesNoMaybe {
    if (x === true) {
        return YesNoMaybe.YES;
    }
    if (x === false) {
        return YesNoMaybe.NO;
    }
    return YesNoMaybe.MAYBE;
}
