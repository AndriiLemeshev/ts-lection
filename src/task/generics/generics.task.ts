export interface Bird {
    type: 'crow' | 'pigeon';
}

// Alternative syntax
// type BirdType = 'crow' | 'pigeon';
// export interface Bird {
//     type: BirdType;
// }

export interface Crow extends Bird {
    type: 'crow';
    wisdom: number;
}

export interface Pigeon extends Bird {
    type: 'pigeon';
    carelessnes: number;
}

/**
 * Extracts a specific property from a bird object based on its type.
 *
 * @function birdKeyPropertyExtractor
 * @template T extends Bird
 * @param {T} bird - The bird object.
 * @returns {string} A string containing the extracted property value, or 'Unknown bird' if the type is not recognized.
 *
 * @example
 * const crow: Crow = { type: 'crow', wisdom: 10 };
 * const pigeon: Pigeon = { type: 'pigeon', carelessnes: 5 };
 *
 * console.log(birdKeyPropertyExtractor(crow)); // Output: "Wisdom of crow: 10"
 * console.log(birdKeyPropertyExtractor(pigeon)); // Output: "Carelessnes of pigeon: 5"
 */
export function birdKeyPropertyExtractor<T extends Bird>(bird: T): string {
    if (bird.type === 'crow') {
        return `Wisdom of crow: ${(bird as unknown as Crow).wisdom}`;
    }
    if (bird.type === 'pigeon') {
        return `Carelessnes of pigeon: ${(bird as unknown as Pigeon).carelessnes}`;
    }
    return 'Unknown bird';
}
