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

});

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false)

});

test('Невозвращает значение для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).not.toBe('1.00 B')
});


test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5.00 B')

});



// другая группа проверок


test('Возвращает корректное значение для Kb', () => {
  expect(convertBytesToHuman(1024)).toBe('1.00 Kb')

});

test('Возвращает корректное значение для Mb', () => {
  expect(convertBytesToHuman(4*1024*1024)).toBe('4.00 Mb')

});

test('Возвращает корректное значение для Gb', () => {
  expect(convertBytesToHuman(4*1024*1024*1024)).toBe('4.00 Gb')

});

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(12.54)).toBe(false)

});

test('Возвращает false для boolean типа данных', () => {
  expect(convertBytesToHuman(true)).toBe(false)

});

test('Возвращает false для boolean типа данных', () => {
  expect(convertBytesToHuman(false)).toBe(false)

});

test('Возвращает false для массива ', () => {
  expect(convertBytesToHuman([1,2])).toBe(false)

});


