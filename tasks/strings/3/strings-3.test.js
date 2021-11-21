import taskFunction from './strings-3.js';

describe('Task strings-3', () => {
    it.each([
        ['Hello world!', 15, 'Hello world!'],
        ['Long text to reduce', 12, 'Long text...'],
    ])('Should for "%s" with %i max length return "%s"', (str, maxLength, expected) => {
        expect(taskFunction(str, maxLength)).toBe(expected);
    });
});
