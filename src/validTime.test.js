const solution = require('./validTime.js');

test('test 1', () => {
    expect(solution("13:58")).toBe(true);
});

test('test 2', () => {
    expect(solution("25:51")).toBe(false);
});

test('test 3', () => {
    expect(solution("02:76")).toBe(false);
});

test('test 4', () => {
    expect(solution("24:00")).toBe(false);
});

test('test 5', () => {
    expect(solution("02:61")).toBe(false);
});

test('test 6', () => {
    expect(solution("27:00")).toBe(false);
});

test('test 7', () => {
    expect(solution("19:66")).toBe(false);
});

test('test 8', () => {
    expect(solution("12:31")).toBe(true);
});

test('test 9', () => {
    expect(solution("25:73")).toBe(false);
});

test('test 10', () => {
    expect(solution("09:56")).toBe(true);
});

test('test 11', () => {
    expect(solution("03:29")).toBe(true);
});
