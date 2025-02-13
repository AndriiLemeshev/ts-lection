/**
 * Represents a generic vehicle.  This interface serves as a base for more specific vehicle types.
 * @interface Vehicle
 */
export interface Vehicle {

}

/**
 * Represents a car, which is a type of vehicle.
 * @interface Car
 * @extends Vehicle
 * 
 * @property {number} numberOfWheels - The number of wheels the car has.
 */
interface Car extends Vehicle {
    numberOfWheels: number;
}

/**
 * Represents a plane, which is a type of vehicle.
 * @interface Plane
 * @extends Vehicle
 * 
 * @property {number} numberOfWings - The number of wings the plane has.
 */
interface Plane extends Vehicle {
    numberOfWings: number;
}

/**
 * Converts a Vehicle object to its JSON string representation.
 * @function vehicleToJSON
 * @param {Vehicle} vehicle - The Vehicle object to convert.
 * @returns {string} The JSON string representation of the vehicle.
 * @example
 * const myCar: Car = { numberOfWheels: 4 };
 * const jsonString = vehicleToJSON(myCar);
 * console.log(jsonString); // Output: {"numberOfWheels":4}
 */
export function vehicleToJSON(vehicle: Vehicle): string {
    return JSON.stringify(vehicle);
}
