import taskFunction from './strings-2';

describe('Task strings-2', () => {
    it.each([
        ['string', 'String'],
        ['Word', 'Word'],
        ['', ''],
    ])('Should return "%s" for "%s"', (str, expected) => {
        expect(taskFunction(str)).toBe(expected);
    });
});
