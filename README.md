# Proyecto JavaScript Puro - La Cosecha de a Malditas

Este proyecto implementa el algoritmo de Kadane para encontrar la máxima ganancia en un huerto de calabazas, donde las parcelas pueden tener valores positivos (calabazas deliciosas) o negativos (calabazas malvadas). Debido a una maldición, se debe cosechar un bloque contiguo de parcelas sin saltarse ninguna.

## Archivos

- `maxima-ganancia/script.js`: Implementación de la función `maximaGanancia`
- `maxima-ganancia/maximaGanancia.test.js`: Tests unitarios usando el test runner integrado de Node.js
- `maxima-ganancia/maximaGanancia-benchmark.js`: Benchmark para medir el rendimiento de la función

## Cómo ejecutar

### Ejecutar la función

```bash
node maxima-ganancia/script.js
```

Nota: La función está exportada, pero no hay ejecución directa. Para probar, importa en otro script o añadir un console.log en `script.js`.

### Ejecutar tests

```bash
npm run test
```

Usa el test runner integrado de Node.js (sin dependencias externas).

### Ejecutar benchmark

```bash
npm run bench
```

Mide el tiempo de ejecución de la función con un array grande.

## Funcionalidades

- Calcula la máxima ganancia (suma máxima de subarray) para un array de números.
- Tests unitarios cubren casos positivos, negativos y mixtos.
- Benchmark para evaluar el rendimiento.

## Ejemplo

```javascript
const huertoMaldito = [2, -5, 8, -2, 4, -10, 3, 1];
console.log(maximaGanancia(huertoMaldito)); // 10
```
