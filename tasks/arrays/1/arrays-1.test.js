import taskFunction from './arrays-1.js';

describe('Task arrays-1', () => {
    it.each([
        [[], []],
        [[1, 2, 3], [1, 2, 3]],
        [[0, -1, 2, -3, 4], [0, 1, 2, 3, 4]]
    ])('Should for %j return %j', (array, expected) => {
        expect(taskFunction(array)).toEqual(expected);
    });
});
