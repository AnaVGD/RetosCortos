const maximaGanancia = require('./script');

function benchmark() {
  const size = 100000;
  const parcelas = Array.from({ length: size }, () => Math.random() * 200 - 100);
  console.time('maximaGanancia');
  const result = maximaGanancia(parcelas);
  console.timeEnd('maximaGanancia');
  console.log('Result:', result);
}

benchmark();