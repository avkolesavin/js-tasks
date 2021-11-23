import taskFunction from './strings-5.js';

describe('Task strings-5', () => {
    it.each([
        ['', '', 0],
        ['hello', 'Hello', 1],
        ['hello', 'hallo', 1],
        ['word', 'good', 2],
    ])('Should for "%s" and "%s" return %i', (str1, str2, expected) => {
        expect(taskFunction(str1, str2)).toBe(expected);
    });
});
