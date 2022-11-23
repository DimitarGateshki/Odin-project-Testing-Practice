const capitalize = require('../codes/capitalize');


test('Convert name',()=>{
    expect(capitalize('DimiTAr')).toBe('Dimitar');
});

test('Empty string', ()=>{
    expect(capitalize('')).toBe('');
});

test('Convert full capital name',()=>{
    expect(capitalize('DIMITAR')).toBe('Dimitar');
});

test('Convert full lower name',()=>{
    expect(capitalize('dimitar')).toBe('Dimitar');
});