import taskFunction from './arrays-4.js';

describe('Task arrays-4', () => {
    it.each([
        [[], []],
        [[12, 49, 6, 18], []],
        [[34, 60, 28, 980, 11], [60, 980]],
    ])('Should for %j return %j', (array, expected) => {
        expect(taskFunction(array)).toEqual(expected);
    });
});
