import {extractPhone} from "./function-interfaces.task";

describe('extractPhone', () => {
    it('should extract the phone number from a valid object', () => {
        const obj = { phone: '123-456-7890' };
        expect(extractPhone(obj)).toBe('123-456-7890');
    });

    it('should handle objects with other properties', () => {
        const obj = { phone: '123-456-7890', name: 'John Doe' };
        expect(extractPhone(obj)).toBe('123-456-7890'); // Should still extract the phone number
    });
});
