function maximaGanancia(parcelas) {
  let maxActual = parcelas[0];
  let maxTotal = parcelas[0];

  for (let i = 1; i < parcelas.length; i++) {
    // Decidir si seguimos el bloque o empezamos uno nuevo
    maxActual = Math.max(parcelas[i], maxActual + parcelas[i]);

    // Guardar el máximo total si encontramos algo mejor
    maxTotal = Math.max(maxTotal, maxActual);
  }

  return maxTotal;
}

module.exports = maximaGanancia;