// import { Bird, birdKeyPropertyExtractor, Crow, Pigeon } from "./generics.task";

// describe('birdKeyPropertyExtractor', () => {
//     it('should return the wisdom of a crow', () => {
//         const crow: Crow = { type: 'crow', wisdom: 10 };
//         expect(birdKeyPropertyExtractor(crow)).toBe('Wisdom of crow: 10');
//     });

//     it('should return the carelessness of a pigeon', () => {
//         const pigeon: Pigeon = { type: 'pigeon', carelessnes: 5 };
//         expect(birdKeyPropertyExtractor(pigeon)).toBe('Carelessnes of pigeon: 5');
//     });

//     it('should return "Unknown bird" for an unknown bird type', () => {
//         const bird: Bird = { type: 'unknown' as 'crow' | 'pigeon' }; // Type assertion needed for test
//         expect(birdKeyPropertyExtractor(bird)).toBe('Unknown bird');
//     });

//     it('should handle different wisdom and carelessness values', () => {
//       const crow: Crow = { type: 'crow', wisdom: 25 };
//       expect(birdKeyPropertyExtractor(crow)).toBe('Wisdom of crow: 25');

//       const pigeon: Pigeon = { type: 'pigeon', carelessnes: 1 };
//       expect(birdKeyPropertyExtractor(pigeon)).toBe('Carelessnes of pigeon: 1');
//     });

//     it('should work with a generic Bird type', () => {
//       const crow: Bird = { type: 'crow', wisdom: 15 } as Crow; // Type assertion to satisfy TS
//       expect(birdKeyPropertyExtractor(crow)).toBe('Wisdom of crow: 15');

//       const pigeon: Bird = { type: 'pigeon', carelessnes: 7 } as Pigeon; // Type assertion to satisfy TS
//       expect(birdKeyPropertyExtractor(pigeon)).toBe('Carelessnes of pigeon: 7');
//     });
// });
