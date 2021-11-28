import taskFunction from './arrays-5.js';

describe('Task arrays-5', () => {
    it.each([
        [1, 0],
        [2, 1],
        [3, 1],
        [4, 2],
        [8, 13],
        [12, 89],
    ])('Should for %ith element return %i', (n, expected) => {
        expect(taskFunction(n)).toBe(expected);
    });
});
