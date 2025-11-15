# Proyecto JavaScript Puro - Máxima Ganancia

Este proyecto implementa el algoritmo de Kadane para encontrar la suma máxima de un subarray contiguo.

## Archivos

- `script.js`: Implementación de la función `maximaGanancia`
- `maximaGanancia.test.js`: Tests unitarios usando el test runner integrado de Node.js
- `index.html`, `style.css`: Interfaz web (opcional)

## Cómo ejecutar

### Ejecutar la función

```bash
node script.js
```

Nota: La función está exportada, pero no hay ejecución directa. Para probar, importa en otro script o añadir un console.log en `script.js`.

### Ejecutar tests

```bash
npm run test
```

Usa el test runner integrado de Node.js (sin dependencias externas).

## Funcionalidades

- Calcula la máxima ganancia (suma máxima de subarray) para un array de números.
- Tests unitarios cubren casos positivos, negativos y mixtos.
