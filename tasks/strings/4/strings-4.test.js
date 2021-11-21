import taskFunction from './strings-4.js';

describe('Task strings-4', () => {
    it.each([
        ['Sentence with verylongword', 'Sentence with'],
        ['Per aspera ad astra', 'Per ad astra'],
        ['Kitties is evil', 'is evil'],
        ['', ''],
    ])('Should for "%s" return "%s"', (str, expected) => {
        expect(taskFunction(str)).toBe(expected);
    });
});
