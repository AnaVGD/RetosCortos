const { test, describe } = require('node:test');
const assert = require('node:assert');
const maximaGanancia = require('./script');

describe('maximaGanancia', () => {
  test('Array positivo', () => {
    assert.strictEqual(maximaGanancia([1, 2, 3, 4]), 10);
  });

  test('Array negativo', () => {
    assert.strictEqual(maximaGanancia([-1, -2, -3]), -1);
  });

  test('Array mixto', () => {
    assert.strictEqual(maximaGanancia([1, -2, 3, 4, -1, 2, 1, -5, 4]), 9);
  });

  test('Un solo elemento positivo', () => {
    assert.strictEqual(maximaGanancia([5]), 5);
  });

  test('Un solo elemento negativo', () => {
    assert.strictEqual(maximaGanancia([-3]), -3);
  });

  test('Cambio de negativo a positivo', () => {
    assert.strictEqual(maximaGanancia([-2, 1]), 1);
  });

  test('Array con subarray óptimo interno', () => {
    assert.strictEqual(maximaGanancia([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });

  test('Array todo negativo', () => {
    assert.strictEqual(maximaGanancia([-1, -2, -3, -4]), -1);
  });

  test('Array con gran negativo en medio', () => {
    assert.strictEqual(maximaGanancia([8, 1, -100, 2, 5]), 9);
  });
});