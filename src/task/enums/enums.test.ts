import { optionalBooleanToEnum, YesNoMaybe } from "./enums.task";

describe('optionalBooleanToEnum', () => {
    it('should return YES for true', () => {
        expect(optionalBooleanToEnum(true)).toBe("Yes");
    });

    it('should return NO for false', () => {
        expect(optionalBooleanToEnum(false)).toBe("No");
    });

    it('should return MAYBE for undefined', () => {
        expect(optionalBooleanToEnum(undefined)).toBe("Maybe");
    });

    it('should return MAYBE for null (if you decide to handle null)', () => {
        expect(optionalBooleanToEnum(null as unknown as boolean)).toBe(YesNoMaybe.MAYBE);
    });

    it('should handle different boolean values', () => {
      expect(optionalBooleanToEnum(true)).toBe(YesNoMaybe.YES);
      expect(optionalBooleanToEnum(false)).toBe(YesNoMaybe.NO);
    });

    it('should correctly handle the MAYBE case', () => {
      expect(optionalBooleanToEnum(undefined)).toBe(YesNoMaybe.MAYBE);
    });


    it('should return a valid YesNoMaybe enum value', () => {
        const result = optionalBooleanToEnum(true);
        expect(Object.values(YesNoMaybe).includes(result)).toBe(true); // Check if it's a valid enum member.
    });
});
