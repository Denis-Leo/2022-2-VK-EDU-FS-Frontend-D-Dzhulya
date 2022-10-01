/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  // ...
});

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false)
  // ...
});

test('Невозвращает значение для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).not.toBe('1.00 B')
  // ...
});


test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5.00 B')
  // ...
});


// другая группа проверок
