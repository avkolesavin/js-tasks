import taskFunction from './arrays-3.js';

describe('Task arrays-3', () => {
    it.each([
        [[], []],
        [[1, 3, 5, 7], []],
        [[1, 2, 3, 4, 5, 6], [2, 4, 6]],
    ])('Should for %j return %j', (array, expected) => {
        expect(taskFunction(array)).toEqual(expected);
    });
});
