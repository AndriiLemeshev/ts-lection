import { Vehicle, vehicleToJSON } from "./object-interfaces.task";

describe('vehicleToJSON', () => {
    it('should convert a Car object to JSON', () => {
        const jsonString = vehicleToJSON({ numberOfWheels: 4 });
        expect(jsonString).toBe('{"numberOfWheels":4}');
    });

    it('should convert a Plane object to JSON', () => {
        const jsonString = vehicleToJSON({ numberOfWings: 2 });
        expect(jsonString).toBe('{"numberOfWings":2}');
    });

    it('should handle an empty Vehicle object', () => {
        const vehicle: Vehicle = {};
        const jsonString = vehicleToJSON(vehicle);
        expect(jsonString).toBe('{}');
    });

    it('should return a string', () => {
        const jsonString = vehicleToJSON({ numberOfWheels: 4 });
        expect(typeof jsonString).toBe('string');
    });
});
