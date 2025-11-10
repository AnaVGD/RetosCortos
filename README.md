# Proyecto JavaScript Puro - Máxima Ganancia

Este proyecto implementa el algoritmo de Kadane para encontrar la suma máxima de un subarray contiguo.

Los archivos del proyecto se encuentran en la carpeta `maxima-ganancia/`.

## Archivos

- `maxima-ganancia/script.js`: Implementación de la función `maximaGanancia`
- `maxima-ganancia/maximaGanancia.test.js`: Tests unitarios usando el test runner integrado de Node.js

## Cómo ejecutar

### Ejecutar la función

```bash
node maxima-ganancia/script.js
```

Nota: La función está exportada, pero no hay ejecución directa. Para probar, importa en otro script o añadir un console.log en `maxima-ganancia/script.js`.

### Ejecutar tests

```bash
npm run test
```

Usa el test runner integrado de Node.js (sin dependencias externas).

## Funcionalidades

- Calcula la máxima ganancia (suma máxima de subarray) para un array de números.
- Tests unitarios cubren casos positivos, negativos y mixtos.
