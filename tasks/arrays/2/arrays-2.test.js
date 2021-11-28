import taskFunction from './arrays-2.js';

describe('Task arrays-2', () => {
    it.each([
        [[], 0],
        [[2], 2],
        [[4, 2, 8, 6], 5],
        [[1, 2.5, 4, 6.7, 8.3], 4.5],
        [[1, -2, 3, -4], -0.5],
    ])('Should for %j return %f', (array, expected) => {
        expect(taskFunction(array)).toBe(expected);
    });
});
