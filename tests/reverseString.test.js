const reverseString = require('../codes/reverseString');


test('dimi to imid', () => {
    expect(reverseString('dimi')).toBe('imid');
})

test('abcdefg to gfedcba', () => {
    expect(reverseString('abcdefg')).toBe('gfedcba');
})

test('redivider to redivider', () => {
    expect(reverseString('redivider')).toBe('redivider')
})

test(" '' to '' ", () => {
    expect(reverseString('')).toBe('');
});
