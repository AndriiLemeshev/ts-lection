import { Counter } from "./classes.task";

describe('Counter', () => {
    it('should initialize the counter to 0 by default', () => {
        const counter = new Counter();
        expect(counter.result()).toBe(0);
    });

    it('should initialize the counter to a given value', () => {
        const counter = new Counter(10);
        expect(counter.result()).toBe(10);
    });

    it('should increment the counter when count() is called', () => {
        const counter = new Counter();
        counter.count();
        expect(counter.result()).toBe(1);
        counter.count();
        expect(counter.result()).toBe(2);
    });

    it('should return the correct count after multiple increments', () => {
        const counter = new Counter(5);
        counter.count();
        counter.count();
        counter.count();
        expect(counter.result()).toBe(8);
    });
});
