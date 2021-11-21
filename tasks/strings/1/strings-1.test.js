import task from './strings-1';

describe('Task strings-1', () => {
    it.each([
        ['word', 'drow'],
        ['Hello world!', '!dlrow olleH'],
        ['This is Java Script', 'tpircS avaJ si sihT'],
        ['', ''],
    ])('Should take "%s" and return "%s"', (str, expected) => {
        expect(task(str)).toBe(expected);
    });
});