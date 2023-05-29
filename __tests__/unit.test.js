// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('correct phone number 1', () => {
    expect(functions.isPhoneNumber("(858) 534-2230")).toBe(true);
});

test('correct phone number 2', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('incorrect phone number 1', () => {
    expect(functions.isPhoneNumber("8")).toBe(false);
});

test('incorrect phone number 2', () => {
    expect(functions.isPhoneNumber('1234-456-789')).toBe(false);
});

test('correct email 1', () => {
    expect(functions.isEmail("cse110@ucsd.edu")).toBe(true);
});

test('correct email 2', () => {
    expect(functions.isEmail("email@gmail.com")).toBe(true);
});

test('incorrect email 1', () => {
    expect(functions.isEmail("@@gmail.com")).toBe(false);
});

test('incorrect email 2', () => {
    expect(functions.isEmail("wrong@1gmail.com")).toBe(false);
});

test('correct password 1', () => {
    expect(functions.isStrongPassword("abc123")).toBe(true);
});

test('correct password 2', () => {
    expect(functions.isStrongPassword("hi567")).toBe(true);
});

test('incorrect password 1', () => {
    expect(functions.isStrongPassword("123abc")).toBe(false);
});

test('incorrect password 2', () => {
    expect(functions.isStrongPassword("3")).toBe(false);
});

test('correct date 1', () => {
    expect(functions.isDate("1/1/2000")).toBe(true);
});

test('correct date 2', () => {
    expect(functions.isDate("12/12/2023")).toBe(true);
});

test('correct date 1', () => {
    expect(functions.isDate("2023/5/28")).toBe(false);
});

test('incorrect date 2', () => {
    expect(functions.isDate("12-12-12")).toBe(false);
});

test('correct color 1', () => {
    expect(functions.isHexColor("#123")).toBe(true);
});

test('correct color 2', () => {
    expect(functions.isHexColor("#0AA")).toBe(true);
});

test('incorrect color 1', () => {
    expect(functions.isHexColor("#12312")).toBe(false);
});

test('incorrect color 2', () => {
    expect(functions.isHexColor("ffff")).toBe(false);
});