/**
 * Defines a function interface for extracting a phone number from an object.
 * The object is expected to have a property named "phone" of type string.
 *
 * @interface PhonePropertyExtractor
 */
export interface PhonePropertyExtractor {
    /**
     * Extracts the phone number from an object.
     *
     * @param object - The object containing the phone number.  This object
     *                 is expected to have a property named "phone" of type string.
     * @returns The extracted phone number as a string.
     * @throws {TypeError} If the input object is null or undefined, or if the
     *                    "phone" property is not a string.
     */
    (object: { phone: string }): string;
}

// TODO: Uncomment function, add types and implement it according to jsdoc.
// export const extractPhone: PhonePropertyExtractor = (object) => {};
